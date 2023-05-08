import React, { useEffect, useState } from "react"
import "../styles/SeatMap.scss"
import { office } from "../data"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setComment, setSelectedItem } from "../store/formSlice"
import { useNavigate } from "react-router-dom"
import StatusPopup from "../components/StatusPopup"

const ResultPage = () => {
  const [popup, setPopup] = useState<boolean>(false)
  const data = useAppSelector((state) => state.form)
  const navigate = useNavigate()
  const { dateBooking, durationBooking, levelTower, timeBooking, typeOfTower } =
    data

  useEffect(() => {
    if (
      !(
        dateBooking &&
        durationBooking &&
        levelTower &&
        timeBooking &&
        typeOfTower
      )
    ) {
      navigate("/")
    }
  }, [])

  const dispatch = useAppDispatch()

  const choiceItem = (id: number) => {
    dispatch(setSelectedItem(id))
  }

  const submitHandler = () => {
    setPopup(true)
    dispatch(setComment(""))
    console.log(data)
  }

  return (
    <div className="result-container">
      <section className="seat-map">
        <div className="container">
          <div className="seat-map__margin-collapse"></div>
          <h1 className="seat-map__inner-title">
            Башня {data.typeOfTower}. этаж {data.levelTower}. Выберите
            необходимую зону
          </h1>
          <div className="seat-map__container">
            <div className="seat-map__inner">
              {office.map((item) => (
                <div
                  className={`seat-map__item seat-map__item--${item.id} ${
                    data.selectedItem === item.id
                      ? "seat-map__item--selected"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => choiceItem(item.id)}
                >
                  <div className="seat-map__description">
                    <h2 className="seat-map__title">Номер: {item.id}</h2>
                    <p className="seat-map__square">
                      Площадь: {item.square}м<sup>2</sup>
                    </p>
                    <p className="seat-map__price">{item.price}р.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {data.selectedItem && (
        <section className="feedback-form">
          <div className="container">
            <div className="feedback-form__inner">
              <h2 className="feedback-form__title">
                Вы выбрали коворкинг № {data.selectedItem}
              </h2>
              <label className="feedback-form__label" htmlFor="textarea">
                Вы так же можете оставить комментарий
              </label>
              <div className="feedback-form__box">
                <textarea
                  value={data.comment}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    dispatch(setComment(e.target.value))
                  }
                  className="feedback-form__textarea"
                  id="textarea"
                ></textarea>
                <button
                  className="feedback-form__btn button"
                  onClick={submitHandler}
                >
                  Подать заявку
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {popup && (
        <StatusPopup
          popup={popup}
          setPopup={setPopup}
          message="Спасибо за обращение!"
          status="succes"
        />
      )}
    </div>
  )
}

export default ResultPage
