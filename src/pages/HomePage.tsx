import React from "react"
import Form from "../components/Form"

interface IHome {
  currentref: React.RefObject<HTMLDivElement>
}

const HomePage: React.FC<IHome> = () => {
  return (
    <div className="smooth">
      <main className="main">
        <section className="main__content">
          <div className="container">
            <section className="main__inner">
              <h1 className="main__title title">Бронирование коворкингов</h1>
              <p className="main__desc">В любое время в центре города</p>
              <Form />
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
