import React from "react"
import Select from "react-select"
import { towers, levels, time, duration } from "../data"

const FormItems = () => {
  return (
    <>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-2-input">
          Выбор башни
        </label>
        <Select
          //   onChange={onChangetower}
          classNamePrefix="list"
          placeholder=""
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
    </>
  )
}

export default FormItems
