import React from "react"
import "../styles/SeatMap.scss"
import { office } from "../data"
import { useAppSelector } from "../hooks"

const ResultPage = () => {
  const data = useAppSelector((state) => state.form)
  console.log(data)

  return (
    <section className="seat-map">
      <h2>{data.levelTower} этаж</h2>
      <div className="container">
        <div className="seat-map__container">
          <div className="seat-map__inner">
            {office.map((item) => (
              <div
                className={`seat-map__item seat-map__item--${item.id}`}
                key={item.id}
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
  )
}

export default ResultPage
