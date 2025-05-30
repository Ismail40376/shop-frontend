import Raiting from "../rating/Rating";
import s from "./Card.module.scss";

const Card = () => {
  return (
    <div className={s.cardWrap}>
      <Raiting rating={3} />
      <p className={s.stars}></p>
      <img src="/clothes.png" alt="clothes" />
      <p className={s.heart}>heart</p>
      <p>title</p>
      <p>price</p>
    </div>
  );
};

export default Card;
