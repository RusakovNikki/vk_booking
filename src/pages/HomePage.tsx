import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Form from "../components/Form"
import Preloader from "../components/Preloader"

interface IHome {
  currentref: React.RefObject<HTMLDivElement>
}

const HomePage: React.FC<IHome> = ({ currentref }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  if (!isLoading) {
    return <Preloader />
  }
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
      <Footer currentref={currentref} />
    </div>
  )
}

export default HomePage
