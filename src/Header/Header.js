import "./Header.scss";

function Header() {
    
  return (
    <header className="header">
      <div className="header__icon">
        <div className="header__icon--details">
          <a href="https://bloom-alternance.fr/">
            <img src="https://bloom-alternance.fr/static/media/Logo.088fe1d4.svg"></img>
          </a>
        </div>
      </div>
      <div className="header__content">
        <div className="header__items">
          <a className="header__item">Je recrute!</a>
          <a className="header__item">Job Board</a>
          <div className="header__button">
            <button className="header__button--one">Connexion</button>
            <button className="header__button--two">Dépose ton CV</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;