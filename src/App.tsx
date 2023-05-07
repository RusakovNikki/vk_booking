import React, { useRef } from "react"
// import { Routes, Route, Link } from "react-router-dom"
import "./styles/App.scss"
import HomePage from "./pages/HomePage"
// import ResultPage from "./pages/ResultPage"
import Header from "./components/Header"

function App() {
  const currentref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Header currentref={currentref} />
      <HomePage currentref={currentref} />
    </>
  )
}

export default App
