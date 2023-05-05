import React from "react"
import logoSVG from "../images/logo.svg"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo logo">
            <a className="header__logo-link" href="#">
              <img className="logo__img" src={logoSVG} alt="Логотип коипании" />
            </a>
            <span className="logo__title">booking</span>
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
