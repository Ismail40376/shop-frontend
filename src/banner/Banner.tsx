import s from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={`${s.wrapper} container`}>
        <h5 className={s.subtitle}>New collection</h5>
        <p className={s.title}>Menswear 2025</p>
        <button className={s.lighButton}>Shop sale</button>
        <button className={s.greenButton}>Shop the menswear</button>
      </div>
    </div>
  );
};

export default Banner;
