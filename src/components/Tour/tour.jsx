import "./tour.scss";
import Card from "../card/card";
import image1 from "./images/Sharm hotel.png";
import image2 from "./images/Cyrer.png";

import React from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 1 },
  1300: { items: 2 },
  1600: { items: 3 },
};

const items = [
  <Card
    image={image1}
    main={"8 марта в Cyrene Sharm hotel"}
    time={"(12.03.2018 — 19.03.2018)"}
    info={"Перелёт, питание по системе all inclusive, трансфер"}
    price={"1 259 грн"}
  />,
  <Card
    image={image2}
    main={"8 марта в Cyrene Sharm hotel"}
    time={"(12.03.2018 — 19.03.2018)"}
    info={"Перелёт, питание по системе all inclusive, трансфер"}
    price={"1 259 грн"}
  />,
  <Card
    image={image2}
    main={"8 марта в Cyrene Sharm hotel"}
    time={"(12.03.2018 — 19.03.2018)"}
    info={"Перелёт, питание по системе all inclusive, трансфер"}
    price={"1 259 грн"}
  />,
  <Card
    image={image1}
    main={"8 марта в Cyrene Sharm hotel"}
    time={"(12.03.2018 — 19.03.2018)"}
    info={"Перелёт, питание по системе all inclusive, трансфер"}
    price={"1 259 грн"}
  />,
];

const Tour = () => {
  return (
    <div className="tour__container">
      <div className="tour__block">
        <div className="tour__text active">Горящие туры</div>
        <div className="tour__text">Популярные туры</div>
      </div>
      <div className="card-box">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          items={items}
          disableDotsControls
          paddingLeft={20}
        />
      </div>
    </div>
  );
};

export default Tour;
