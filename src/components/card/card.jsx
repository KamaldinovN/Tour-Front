// eslint-disable-next-line
import style from "./card.scss";

const Card = ({ image, main, time, info, price }) => {
  return (
    <div className="box__card">
      <img className="image" src={image} alt="photo_card"></img>
      <div className="card__text">
        <div className="card__text_main">{main}</div>
        <div className="card__text_time">{time}</div>
        <div className="line"></div>
        <div className="card__text_info">{info}</div>
        <div className="card__text_price">{price}</div>
        <div className="card__text_person">/за 1 человека</div>
        <button className="button__card"> > </button>
      </div>
    </div>
  );
};

export default Card;
