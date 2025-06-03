import type { FC } from "react";
import heartFilled from "../../public/Heart_filled.svg";
import heartEmpty from "../../public/heart-icon.png";
import Rating from "../rating/Rating";
import type { ProductType } from "../types/Product-type";
import s from "./Card.module.scss";

const Card: FC<Omit<ProductType, "_id" | "category_id">> = ({
  rating,
  title,
  price,
  isFavorite,
  // image,
  description,
}) => {
  const cardImage = "/shoes.png";
  // const apiURL = "http://localhost:8000";
  // if (image) {
  //   cardImage = apiURL + "/uploads/" + image;
  // }
  return (
    <div className={s.cardWrap}>
      <Rating rating={rating} />
      <img src={cardImage} alt="image" />
      <button className={s.heart}>
        <img src={isFavorite ? heartFilled : heartEmpty} alt="heart" />
      </button>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
