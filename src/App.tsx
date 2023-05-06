import React from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  return (
    <>
      <Header />
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
    </>
  )
}

export default App
