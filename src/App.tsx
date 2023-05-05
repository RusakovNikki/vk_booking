import React from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <section className="main__form">
            <h1 className="main__title title">Бронирование коворкингов</h1>
            <p className="main__desc">В любое время в центре города</p>
            <Form />
          </section>
        </div>
      </main>
    </>
  )
}

export default App
