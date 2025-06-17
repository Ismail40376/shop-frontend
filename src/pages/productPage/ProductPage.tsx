import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../../store";
import { logoutUserAsync } from "../../../store/action/UsersAction";
import Rating from "../../rating/Rating";
import type { ProductType } from "../../types/Product-type";
import s from "./ProductPage.module.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>({
    _id: 0,
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    rating: 0,
    isFavorite: false,
  });
  const user = useSelector((state: RootState) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      let cardImage = "/clothes.png";
      const apiURL = "http://localhost:8000";
      if (response.data.image) {
        cardImage = apiURL + "/uploads/" + response.data.image;
        response.data.image = cardImage;
      }
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleToggleFavorite = async () => {
    const token = user?.token;
    if (!token) {
      alert("Необходимо авторизоваться");
      navigate("/login");
      return;
    }
    try {
      const method = product.isFavorite ? "delete" : "post";
      const data = {
        userId: user._id,
      };
      await axios({
        method,
        url: `http://localhost:8000/favorites/${id}`,
        data,
      });
      getProductById();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errMsg = error.response?.data?.message || error.message;
        if (errMsg.includes("jwt expired")) {
          alert("Сессия истекла. Пожалуйста, авторизуйтесь еще раз.");
          dispatch(logoutUserAsync());
          localStorage.removeItem("state");
          navigate("/login");
          return;
        }
        alert(`Ошибка: ${errMsg}`);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <p className={s.title}>{product.title}</p>
      <div className={s.card}>
        <div>
          <img src={product.image}></img>
        </div>

        <div style={{ position: "relative" }}>
          <p className={s.price}>$ {product.price}</p>
          <Rating rating={product.rating} />
          <p>
            <b>Описание:</b> {product.description}
          </p>
          <div className={s.btnWrap}>
            <input type="number" defaultValue={1} className={s.qty} min={1} />
            <button className={s.btnCard}>
              <img src="/White-cart-icon.png" style={{ width: "15px", marginRight: "10px" }} />
              add to card
            </button>
            <button className={s.btnFavorite} onClick={handleToggleFavorite}>
              {!product.isFavorite ? (
                <img src="/heart-icon.png" style={{ width: "15px", marginRight: "10px" }} />
              ) : (
                <img src="/Heart_filled.svg" style={{ width: "15px", marginRight: "10px" }} />
              )}
              favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
