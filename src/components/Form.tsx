import React from "react"
import Select from "react-select"

import { towers, levels, time, duration } from "../data"

const Form: React.FC = () => {
  return (
    <form className="main__form" action="#">
      <div className="main__form-items">
        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-2-input">
            Выбор башни
          </label>
          <Select
            classNamePrefix="list"
            placeholder=""
            id="qqq"
            options={towers}
          />
        </div>

        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-3-input">
            Выбор этажа
          </label>
          <Select classNamePrefix="list" placeholder="" options={levels} />
        </div>
        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-4-input">
            Время начала
          </label>
          <Select classNamePrefix="list" placeholder="" options={time} />
        </div>
        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-5-input">
            Продолжительность
          </label>
          <Select classNamePrefix="list" placeholder="" options={duration} />
        </div>
      </div>
      <div className="main__form-item--btn">
        <button className="main__btn">Найти коворкинг</button>
      </div>
    </form>
  )
}

export default Form
