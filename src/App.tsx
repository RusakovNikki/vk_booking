import React, { useEffect, useState } from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import Form from "./components/Form"
import Preloader from "./components/Preloader"

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  if (!isLoading) {
    return <Preloader />
  }
  return (
    <div className="smooth">
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
      <footer className="footer"></footer>
    </div>
  )
}

export default App
