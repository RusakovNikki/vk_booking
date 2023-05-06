import React, { useState } from "react"
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
  const [isEmptyTowerInput, setIsEmptyTowerInput] = useState(false)
  const [isEmptyLevelInput, setIsEmptyLevelInput] = useState(false)
  const [isEmptyTimeInput, setIsEmptyTimeInput] = useState(false)
  const [isEmptyDurationInput, setIsEmptyDurationInput] = useState(false)

  const data = useAppSelector((state) => state.form)

  const onChangetower = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setTypeOfTower(newValue.value))
      setIsEmptyTowerInput(false)
    }
  }
  const onChangeLevels = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setLevelTower(newValue.value))
      setIsEmptyLevelInput(false)
    }
  }

  const onChangeTime = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setTimeBooking(newValue.value))
      setIsEmptyTimeInput(false)
    }
  }

  const onChangeDuration = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue) {
      dispatch(setDurationBooking(newValue.value))
      setIsEmptyDurationInput(false)
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
          onMenuOpen={() => {
            if (!data.typeOfTower) setIsEmptyTowerInput(true)
          }}
          classNamePrefix="list"
          onChange={onChangetower}
          placeholder=""
          options={towers}
        />
        {isEmptyTowerInput && (
          <div className="main__item-decorate smooth"></div>
        )}
      </div>

      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-3-input">
          Выбор этажа
        </label>
        <Select
          onMenuOpen={() => {
            if (!data.levelTower) setIsEmptyLevelInput(true)
          }}
          classNamePrefix="list"
          onChange={onChangeLevels}
          placeholder=""
          options={levels}
        />
        {isEmptyLevelInput && (
          <div className="main__item-decorate smooth"></div>
        )}
      </div>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-4-input">
          Время начала
        </label>
        <Select
          onMenuOpen={() => {
            if (!data.timeBooking) setIsEmptyTimeInput(true)
          }}
          classNamePrefix="list"
          onChange={onChangeTime}
          placeholder=""
          options={time}
        />
        {isEmptyTimeInput && <div className="main__item-decorate smooth"></div>}
      </div>
      <div className="main__form-item">
        <label className="main__label" htmlFor="react-select-5-input">
          Продолжительность
        </label>
        <Select
          onMenuOpen={() => {
            if (!data.durationBooking) setIsEmptyDurationInput(true)
          }}
          classNamePrefix="list"
          onChange={onChangeDuration}
          placeholder=""
          options={duration}
        />
        {isEmptyDurationInput && (
          <div className="main__item-decorate smooth"></div>
        )}
      </div>
    </>
  )
}

export default FormItems
