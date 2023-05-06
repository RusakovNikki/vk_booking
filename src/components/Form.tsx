import React from "react"
import FormItems from "./FormItems"

const Form: React.FC = () => {
  return (
    <form className="main__form" action="#">
      <div className="main__form-items">
        <FormItems />
      </div>
      <div className="main__form-item--btn">
        <button className="main__btn">Найти коворкинг</button>
      </div>
    </form>
  )
}

export default Form
