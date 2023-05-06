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
      <label htmlFor="zone_time">Время начала</label>
      <select className="main__list" id="zone_time" name="zone_time">
        <option className="main__list-item" value="7:00">
          7:00
        </option>
        <option className="main__list-item" value="8:00">
          8:00
        </option>
      </select>
      <label htmlFor="zone_level">Продолжительность</label>
      <select className="main__list" id="zone_level" name="zone_level">
        <option className="main__list-item" value="1">
          1 час
        </option>
        <option className="main__list-item" value="2">
          2 часа
        </option>
      </select>
    </form>
  )
}

export default Form
