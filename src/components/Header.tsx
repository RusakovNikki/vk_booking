import React from "react"
import AnchorLink from "./AnchorLink"
import logoPNG from "../images/logo.png"
import { useNavigate } from "react-router-dom"
// import { useAppDispatch } from "../hooks"
// import { setDefaultValue } from "../store/formSlice"

interface IHeader {
  currentref: React.RefObject<HTMLDivElement>
}

const Header: React.FC<IHeader> = ({ currentref }) => {
  // const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const linkHandler = () => {
    // dispatch(setDefaultValue())
    navigate("/")
  }
  return (
    <header className="header smooth">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo logo" onClick={linkHandler}>
            <a className="header__logo-link" href="#">
              <img className="logo__img" src={logoPNG} alt="Логотип коипании" />
            </a>
            <a className="logo__link" href="#">
              <span className="logo__title">Jamboo Software</span>
            </a>
          </div>
          <nav className="header__nav">
            {/* <a href="#" className="link link--contacts">
              Контакты
            </a> */}
            <AnchorLink href={currentref}>Контакты</AnchorLink>
            {window.location.pathname === "/vk_booking" && (
              <label htmlFor="selectTower" className="link link--start">
                Начать работу
              </label>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
