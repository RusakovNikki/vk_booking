import React, { useState } from "react"
import FormItems from "./FormItems"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "..//hooks"
import AlarmPopup from "./AlarmPopup"
import { getErrorItem } from "../utils/getErrorItem"

const Form: React.FC = () => {
  const [alarm, setAlarm] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const form = useAppSelector((state) => state.form)
  const { typeOfTower, durationBooking, levelTower, timeBooking } = form

  const searchResult = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (typeOfTower && durationBooking && levelTower && timeBooking) {
      navigate("/result")
    } else {
      setAlarm(true)
      setError(getErrorItem(form))
    }
  }
  getErrorItem(form)
  return (
    <>
      <form className="main__form" action="#">
        <div className="main__form-items">
          <FormItems />
        </div>
        <div className="main__form-item--btn">
          <button className="main__btn" onClick={searchResult}>
            Найти коворкинг
          </button>
        </div>
      </form>
      {alarm && <AlarmPopup alarm={alarm} setAlarm={setAlarm} error={error} />}
    </>
  )
}

export default Form
