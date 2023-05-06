import React from "react"
import Select, { SingleValue } from "react-select"
import { towers, levels, time, duration } from "../data"
import { useAppDispatch, useAppSelector } from "../hooks"
import { IOptionsSelect } from "../types"
import {
  setDurationBooking,
  setLevelTower,
  setTimeBooking,
  setTypeOfTower,
} from "../store/formSlice"

const FormItems: React.FC = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.form)

  const onChangetower = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setTypeOfTower(newValue.value))
    }
  }
  const onChangeLevels = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setLevelTower(newValue.value))
    }
  }

  const onChangeTime = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setTimeBooking(newValue.value))
    }
  }

  const onChangeDuration = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setDurationBooking(newValue.value))
    }
  }
  console.log(data)

  return (
    <>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-2-input">
          Выбор башни
        </label>
        <Select
          classNamePrefix="list"
          onChange={onChangetower}
          placeholder=""
          options={towers}
        />
      </div>

      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-3-input">
          Выбор этажа
        </label>
        <Select
          classNamePrefix="list"
          onChange={onChangeLevels}
          placeholder=""
          options={levels}
        />
      </div>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-4-input">
          Время начала
        </label>
        <Select
          classNamePrefix="list"
          onChange={onChangeTime}
          placeholder=""
          options={time}
        />
      </div>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-5-input">
          Продолжительность
        </label>
        <Select
          classNamePrefix="list"
          onChange={onChangeDuration}
          placeholder=""
          options={duration}
        />
      </div>
    </>
  )
}

export default FormItems
