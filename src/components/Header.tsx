import React from "react"
import AnchorLink from "./AnchorLink"
import logoPNG from "../images/logo.png"
import { Link } from "react-router-dom"

interface IHeader {
  currentref: React.RefObject<HTMLDivElement>
}

const Header: React.FC<IHeader> = ({ currentref }) => {
  return (
    <header className="header smooth">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo logo">
            <Link className="header__logo-link" to="/">
              <img className="logo__img" src={logoPNG} alt="Логотип коипании" />
            </Link>
            <Link className="logo__link" to="/">
              <span className="logo__title">Jamboo Software</span>
            </Link>
          </div>
          <nav className="header__nav">
            {/* <a href="#" className="link link--contacts">
              Контакты
            </a> */}
            <AnchorLink href={currentref}>Контакты</AnchorLink>
            <label htmlFor="react-select-2-input" className="link link--start">
              Начать работу
            </label>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
