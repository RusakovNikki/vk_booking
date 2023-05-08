import React from "react"

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh - 205px)",
      }}
    >
      <h1>Произошла ошибка 😕</h1>
      <h2>Такой страницы нет</h2>
    </div>
  )
}

export default NotFoundPage
