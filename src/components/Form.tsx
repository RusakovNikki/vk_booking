import React from "react"
import Select from "react-select"

// import { towers } from "../data/data,js"

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
            options={[
              { value: "A", label: "Башня А" },
              { value: "B", label: "Башня Б" },
            ]}
          />
        </div>

        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-3-input">
            Выбор этажа
          </label>
          <Select
            classNamePrefix="list"
            placeholder=""
            options={[
              { value: "3", label: "3 этаж" },
              { value: "4", label: "4 этаж" },
            ]}
          />
        </div>
        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-4-input">
            Время начала
          </label>
          <Select
            classNamePrefix="list"
            placeholder=""
            options={[
              { value: "7", label: "7:00" },
              { value: "8", label: "8:00" },
            ]}
          />
        </div>
        <div className="main__form-item">
          <label className="main__label" htmlFor="react-select-5-input">
            Продолжительность
          </label>
          <Select
            classNamePrefix="list"
            placeholder=""
            options={[
              { value: "1", label: "1 час" },
              { value: "2", label: "2 часа" },
            ]}
          />
        </div>
      </div>
      <div className="main__form-item--btn">
        <button className="main__btn">Найти коворкинг</button>
      </div>
    </form>
  )
}

export default Form
