import React, { useEffect, useState } from "react"
import "../styles/SeatMap.scss"
import { office } from "../data"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setComment, setSelectedItem } from "../store/formSlice"
import { useNavigate } from "react-router-dom"
import StatusPopup from "../components/StatusPopup"
import { IOptionsSelect } from "../types"
import CreatableSelect, { SingleValue } from "react-select"

const ResultPage = () => {
  const [popup, setPopup] = useState<boolean>(false)
  const data = useAppSelector((state) => state.form)
  const [item, setItem] = useState<IOptionsSelect>()
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
    setItem(
      office
        .map((item) => ({
          value: item.id.toString(),
          label: `Номер ${item.id}. ${item.square} м2`,
        }))
        .find((item) => item.value === id.toString())
    )
  }

  const submitHandler = () => {
    setPopup(true)
    dispatch(setComment(""))

    console.log(data) // не удалять
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
          <CreatableSelect
            isClearable
            value={item}
            classNamePrefix="list"
            defaultValue={{
              value: "0",
              label: "Выберите из списка или на схеме...",
            }}
            onChange={(newValue: SingleValue<IOptionsSelect>) => {
              if (newValue === null) {
                setItem({ value: "", label: "" })
                dispatch(setSelectedItem(0))
              } else {
                setItem(newValue)
                dispatch(setSelectedItem(Number(newValue.value)))
              }
            }}
            placeholder=""
            options={office.map((item) => ({
              value: item.id.toString(),
              label: `Номер ${item.id}. ${item.square} м2`,
            }))}
          />
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
      {data.selectedItem ? (
        <section className="feedback-form">
          <div className="container">
            <div className="feedback-form__inner">
              <h2 className="feedback-form__title">
                Вы выбрали коворкинг № {data.selectedItem}
              </h2>
              <label className="feedback-form__label" htmlFor="textarea">
                Вы так же можете оставить комментарий к своему заказу
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
      ) : (
        <></>
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
