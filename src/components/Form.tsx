import React from "react"

const Form: React.FC = () => {
  return (
    <form className="main__form" action="#">
      <label htmlFor="type_tower">Выбор башни</label>
      <select className="main__list" id="type_tower" name="type_tower">
        <option className="main__list-item" value="A">
          Башня А
        </option>
        <option className="main__list-item" value="B">
          Башня Б
        </option>
      </select>
      <label htmlFor="tower_level">Выбор этажа</label>
      <select className="main__list" id="tower_level" name="tower_level">
        <option className="main__list-item" value="3">
          3 этаж
        </option>
        <option className="main__list-item" value="4">
          4 этаж
        </option>
      </select>
      <label htmlFor="zone_level">Выбор области</label>
      <select className="main__list" id="zone_level" name="zone_level">
        <option className="main__list-item" value="3">
          1 область
        </option>
        <option className="main__list-item" value="4">
          2 область
        </option>
      </select>
    </form>
  )
}

export default Form
