import React from "react"
import "../styles/SeatMap.scss"

const ResultPage = () => {
  return (
    <section className="seat-map">
      <div className="container">
        <div className="seat-map__container">
          <div className="seat-map__inner">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
              <div
                className={`seat-map__item seat-map__item--${idx}`}
                key={idx}
              >
                <div className="seat-map__description seat-map__description--active">
                  <h2 className="seat-map__title">Номер: {idx}</h2>
                  <p className="seat-map__square">
                    Площадь: 88м<sub>2</sub>
                  </p>
                  <p className="seat-map__price">Стоимость: 2490р.</p>
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
