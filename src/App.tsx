import React, { useEffect, useState, useRef } from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import Form from "./components/Form"
import Preloader from "./components/Preloader"

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const currentref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  if (!isLoading) {
    return <Preloader />
  }
  return (
    <div className="smooth">
      <Header currentref={currentref} />
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
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__top">
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    className="footer__item-link footer__item-link--vk"
                    href="https://vk.com/nike_gcs"
                    target="_blank"
                  >
                    Vk
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__item-link footer__item-link--telegram"
                    href="https://t.me/Nikita_Rusakov1337"
                    target="_blank"
                  >
                    Telegram
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__item-link footer__item-link--git"
                    href="https://github.com/RusakovNikki"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__content" ref={currentref} id="footer">
          <div className="container">
            <p className="footer__copy">
              © Nikita Rusakov, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
