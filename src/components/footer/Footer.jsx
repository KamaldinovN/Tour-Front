//eslint-disable-next-line
import style from "./Footer.scss";

import logoFooter from "./logo_footer.png";
import facebook from "../Header/images/inst.png";
import instagram from "../Header/images/insta.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__info">
        <img className="footer__image" src={logoFooter} alt="logoFooter" />
        <div className="footer__line"></div>
        <div className="footer__text">
          Кураж тур агенство,которое предоставляет услуги по поиску, оформлению
          и подбору туров для вас и ваших родных.
        </div>
        <div className="footer__line"></div>
        <div className="footer__creator">
          Создание сайта — n.kamaldinov@gmail.com{" "}
        </div>
      </div>
      <div className="footer__content">
        <div className="footer__navigation">
          <h2> Навигация</h2>
          <div className="footer__navigation_items">Главная</div>
          <div className="footer__navigation_items">О компании</div>
          <div className="footer__navigation_items">Туры</div>
          <div className="footer__navigation_items">Контакты</div>
          <div className="footer__navigation_items">Услуги</div>
        </div>
        <div className="footer__support">
          <h2> Поддержка</h2>
          <div className="footer__support_items">FAQ</div>
          <div className="footer__support_items">Блог</div>
          <div className="footer__support_items">Обратная связь</div>
        </div>
        <div className="footer__contact">
          <h2> Контакты</h2>
          <div className="footer__contact_items">
            г. Харьков, ул. Лермонтовская 10а
          </div>
          <div className="footer__contact_items"> +38 (099) 990-81-00 </div>
          <div className="footer__line_contact"></div>
          <img className="logo__facebook" src={facebook} alt="logo__facebook" />
          <img
            className="logo__instagram"
            src={instagram}
            alt="logo__instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
