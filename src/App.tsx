import React, { useRef, useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import "./styles/App.scss"
import HomePage from "./pages/HomePage"
import ResultPage from "./pages/ResultPage"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./components/Header"
import Preloader from "./components/Preloader"
import Footer from "./components/Footer"

function App() {
  const currentref = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 1000)
  }, [])

  if (!isLoading) {
    return <Preloader />
  }
  return (
    <>
      <Header currentref={currentref} />
      <Routes>
        <Route path="/" element={<HomePage currentref={currentref} />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer currentref={currentref} />
    </>
  )
}

export default App
