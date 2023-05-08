import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import React from "react"

import "./styles/normalize.css"
import App from "./App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter basename="vk_booking">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
