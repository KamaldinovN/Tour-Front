// eslint-disable-next-line
import style from "./header.scss";
import facebook from "./images/inst.png";
import instagram from "./images/insta.png";
import mainLogo from "./images/logoo.png";
import BackgroundSlider from "react-background-slider";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.png";
import banner5 from "./images/banner5.png";

import React from "react";

const Header = () => {
  return (
    <>
      <div className="box">
        <div className="box__header">
          <img className="logo__main" src={mainLogo} alt="logo" />
          <div className="box__nav_contact">
            <div className="box__contact">
              <div className="street">г. Харьков, ул. Мироносицкая 10а</div>
              <div className="contact">
                +38 (099) 990-81-00 (viber, telegram)
              </div>
              <div className="social">
                <img
                  className="logo__social_facebook"
                  src={facebook}
                  alt="logo__facebook"
                />
                <img
                  className="logo__social_instagram"
                  src={instagram}
                  alt="logo__instagram"
                />
              </div>
            </div>
            <nav className="nav">
              <a href="#">
                <div className="nav__items">Главная</div>
              </a>
              <div className="nav__items ">
                <div className="dropdown">
                  <button className="dropbtn">
                    {" "}
                    Туры
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Горящие туры</a>
                    <a href="#">Поиск тура</a>
                    <a href="#">Туры по Украине</a>
                    <a href="#">Экскурсионные туры</a>
                    <a href="#"> Week end туры</a>
                  </div>
                </div>
              </div>
              <div className="nav__items">
                <div className="dropdown">
                  <button className="dropbtn">
                    {" "}
                    Услуги
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Авиабилеты</a>
                    <a href="#">Визовая поддержка</a>
                    <a href="#">Индивидуальный трансфер</a>
                    <a href="#">Подарочные сертификаты</a>
                    <a href="#"> Бронирование отелей и апартаментов</a>
                    <a href="#">Как забронировать и оплатить тур</a>
                  </div>
                </div>
              </div>
              <a href="#">
                {" "}
                <div className="nav__items">О компании</div>
              </a>
              <a href="#">
                {" "}
                <div className="nav__items">Контакты</div>
              </a>
              <a href="#">
                {" "}
                <div className="nav__items">Страны</div>
              </a>
            </nav>
          </div>
        </div>
        <div className="area">
          <div className="text">
            Лучшие предложения по солнечному Египту из Харькова
          </div>
          <button className="button">Получить предложение</button>
        </div>
      </div>
    </>
  );
};

export default Header;
