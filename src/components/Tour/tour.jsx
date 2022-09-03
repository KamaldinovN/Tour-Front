// eslint-disable-next-line
import style from "./tour.scss";
import Card from "../card/card";
import image1 from "./images/Sharm hotel.png";
import image2 from "./images/Cyrer.png";

const Tour = () => {
  return (
    <>
      <div className="tour__block">
        <div className="tour__text">Горящие туры</div>
        <div className="tour__text">Популярные туры</div>
      </div>
      <div className="card-box">
        <Card
          image={image1}
          main={"8 марта в Cyrene Sharm hotel"}
          time={"(12.03.2018 — 19.03.2018)"}
          info={"Перелёт, питание по системе all inclusive, трансфер"}
          price={"1 259 грн"}
        />
        <Card
          image={image2}
          main={"8 марта в Cyrene Sharm hotel"}
          time={"(12.03.2018 — 19.03.2018)"}
          info={"Перелёт, питание по системе all inclusive, трансфер"}
          price={"1 259 грн"}
        />
        <Card
          image={image2}
          main={"8 марта в Cyrene Sharm hotel"}
          time={"(12.03.2018 — 19.03.2018)"}
          info={"Перелёт, питание по системе all inclusive, трансфер"}
          price={"1 259 грн"}
        />
      </div>
    </>
  );
};

export default Tour;
