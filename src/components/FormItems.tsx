import React, { useState, useMemo } from "react"
import CreatableSelect, { SingleValue } from "react-select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { towers, levels, time, duration } from "../data"
import { useAppDispatch, useAppSelector } from "../hooks"
import { IOptionsSelect } from "../types"
import {
  setDateBooking,
  setDurationBooking,
  setLevelTower,
  setTimeBooking,
  setTypeOfTower,
} from "../store/formSlice"
import { getNormalDate } from "../utils/getNormalDate"

const FormItems: React.FC = () => {
  const dispatch = useAppDispatch()
  const [isEmptyTowerInput, setIsEmptyTowerInput] = useState(false)
  const [isEmptyLevelInput, setIsEmptyLevelInput] = useState(false)
  const [isEmptyTimeInput, setIsEmptyTimeInput] = useState(false)
  const [isEmptyDurationInput, setIsEmptyDurationInput] = useState(false)
  const [isEmptyDate, setIsEmptyDate] = useState(false)

  const data = useAppSelector((state) => state.form)

  const onChangetower = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue === null) {
      dispatch(setTypeOfTower(""))
    } else dispatch(setTypeOfTower(newValue.value))
    setIsEmptyTowerInput(false)
  }
  const onChangeLevels = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue === null) {
      dispatch(setLevelTower(""))
    } else dispatch(setLevelTower(newValue.value))
    setIsEmptyLevelInput(false)
  }

  const onChangeTime = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue === null) {
      dispatch(setTimeBooking(""))
    } else dispatch(setTimeBooking(newValue.value))
    setIsEmptyTimeInput(false)
  }

  const onChangeDuration = (newValue: SingleValue<IOptionsSelect>) => {
    if (newValue === null) {
      dispatch(setDurationBooking(""))
    } else dispatch(setDurationBooking(newValue.value))
    setIsEmptyDurationInput(false)
  }

  const onChangeDate = (newValue: string) => {
    if (newValue) {
      dispatch(setDateBooking(newValue))
      setIsEmptyDate(false)
    }
  }

  const getValueSelect = (value: string = "", type: string) => {
    switch (type) {
      case "typeOfTower":
        return data.typeOfTower
          ? towers.find((item) => item.value === value)
          : { value: "", label: "" }
      case "levelTower":
        return data.levelTower
          ? levels.find((item) => item.value === value)
          : { value: "", label: "" }
      case "timeBooking":
        return data.timeBooking
          ? time.find((item) => item.value === value)
          : { value: "", label: "" }
      case "durationBooking":
        return data.durationBooking
          ? duration.find((item) => item.value === value)
          : { value: "", label: "" }
    }
  }

  const getValueTypeOfTower = useMemo(() => {
    return getValueSelect(data.typeOfTower, "typeOfTower")
  }, [data.typeOfTower])

  const getValueLevelTower = useMemo(() => {
    return getValueSelect(data.levelTower, "levelTower")
  }, [data.levelTower])

  const getValueTimeBooking = useMemo(() => {
    return getValueSelect(data.timeBooking, "timeBooking")
  }, [data.timeBooking])

  const getValueDurationBooking = useMemo(() => {
    return getValueSelect(data.durationBooking, "durationBooking")
  }, [data.durationBooking])

  return (
    <>
      <div className="main__form-item">
        <label className="main__label" htmlFor="selectTower">
          Выбор башни
        </label>
        <CreatableSelect
          inputId="selectTower"
          isClearable={Boolean(getValueTypeOfTower?.label)}
          classNamePrefix="list"
          options={towers}
          placeholder=""
          value={getValueTypeOfTower}
          onMenuClose={() => {
            if (!data.typeOfTower) setIsEmptyTowerInput(true)
          }}
          onChange={onChangetower}
        />
        {isEmptyTowerInput && (
          <div className="main__item-decorate smooth"></div>
        )}
      </div>
      <div className="main__form-item">
        <label className="main__label label" htmlFor="selectLevel">
          Выбор этажа
        </label>
        <CreatableSelect
          isClearable={Boolean(getValueLevelTower?.label)}
          inputId="selectLevel"
          value={getValueLevelTower}
          onMenuClose={() => {
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
        <label className="main__label" htmlFor="date">
          Дата
        </label>
        <DatePicker
          id="date"
          onCalendarClose={() => {
            if (!data.dateBooking) setIsEmptyDate(true)
          }}
          selected={data.dateBooking ? new Date(data.dateBooking) : null}
          onChange={(date: Date) => {
            if (date) onChangeDate(getNormalDate(date))
          }}
        />
        {isEmptyDate && <div className="main__item-decorate smooth"></div>}
      </div>
      <div className="main__form-item">
        <label className="main__label" htmlFor="selectTime">
          Время начала
        </label>
        <CreatableSelect
          inputId="selectTime"
          isClearable={Boolean(getValueTimeBooking?.label)}
          value={getValueTimeBooking}
          onMenuClose={() => {
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
        <label className="main__label" htmlFor="selectDuration">
          Продолжительность
        </label>
        <CreatableSelect
          isClearable={Boolean(getValueDurationBooking?.label)}
          inputId="selectDuration"
          value={getValueDurationBooking}
          onMenuClose={() => {
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
