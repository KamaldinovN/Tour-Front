// eslint-disable-next-line
import style from "./Benefits.scss";

import photo from "./Benefits.png";
const Benefits = () => {
  return (
    <div className="container">
      <div className="title">НАШИ ПРЕИМУЩЕСТВА</div>
      <div className="helper">
        <img className="image__benefits" src={photo} alt="photoBenefits" />
        <div className="text__benefits">
          Очень долго подбирали разные варианты для того, чтобы отпраздновать
          свой юбилейный День рождения в путешествии и не могли определиться...
          Решили обратиться за помощью в турагенство. Гульнара, выслушав все
          пожелания, предложила отдых в Турции, отель Justiniano Club Park Conti
          5* в Окурджалар возле Аланьи. Мы очень благодарны ей за предложенный
          вариант!!!! Отдых получился отличный! Отель с большой ухоженной
          территорией, внимательный обслуживающий персонал. Отличный номер с
          видом на море.{" "}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
