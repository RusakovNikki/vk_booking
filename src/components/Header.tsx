import React from "react"
import logoPNG from "../images/logo.png"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo logo">
            <a className="header__logo-link" href="#">
              <img className="logo__img" src={logoPNG} alt="Логотип коипании" />
            </a>
            <a className="logo__link" href="#">
              <span className="logo__title">Jamboo Software</span>
            </a>
          </div>
          <nav className="header__nav">
            <a href="#" className="link link--contacts">
              Контакты
            </a>
            <a href="#" className="link link--start">
              Начать работу
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
