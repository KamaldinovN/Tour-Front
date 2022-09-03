// eslint-disable-next-line
import style from "./Proposal.scss";

const Proposal = () => {
  return (
    <>
      <div className="proposal__container">
        <div className="proposal__title">ХОЧУ ПРЕДЛОЖЕНИЕ ПО ТУРУ</div>
        <div className="proposal__box">
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Имя"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              Имя
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Email"
              id="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Телефон"
              id="телефон"
              required
            />
            <label htmlFor="телефон" className="form__label">
              Телефон
            </label>
          </div>
          <div className="proposal__box_items">
            <div className="dropdown1">
              <button className="dropbtn1">
                Страна тура
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content1">
                <a href="#">Турция</a>
                <a href="#">Египет</a>
                <a href="#">Шри-Ланка</a>
                <a href="#">Доминикана</a>
              </div>
            </div>
          </div>
          <button className="proposal__box_button">Получить предложение</button>
        </div>
      </div>
    </>
  );
};

export default Proposal;
