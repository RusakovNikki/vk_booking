import React, { useState, useEffect } from "react"
import FormItems from "./FormItems"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import AlarmPopup from "./AlarmPopup"
import { getErrorItem } from "../utils/getErrorItem"
import { setDefaultValue } from "../store/formSlice"

const Form: React.FC = () => {
  const [alarm, setAlarm] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const form = useAppSelector((state) => state.form)
  const { typeOfTower, durationBooking, levelTower, timeBooking, dateBooking } =
    form

  const dispatch = useAppDispatch()

  const searchResult = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (
      typeOfTower &&
      durationBooking &&
      levelTower &&
      timeBooking &&
      dateBooking
    ) {
      navigate("/result")
    } else {
      setAlarm(true)
      setError(getErrorItem(form))
    }
  }
  useEffect(() => {
    dispatch(setDefaultValue())
  }, [])

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setDefaultValue())
  }

  return (
    <>
      <form className="main__form" action="#">
        <div className="main__form-items">
          <FormItems />
        </div>
        <div className="main__form-item--btn">
          <button className="main__btn" onClick={searchResult}>
            Отправить
          </button>
          <button className="main__btn main__btn--reset" onClick={resetForm}>
            Сбросить
          </button>
        </div>
      </form>
      {alarm && <AlarmPopup alarm={alarm} setAlarm={setAlarm} error={error} />}
    </>
  )
}

export default Form
