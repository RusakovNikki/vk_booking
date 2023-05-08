# Форма бронирования переговорной

## [Ссылка на решение на GH Pages](https://rusakovnikki.github.io/vk_booking)

## Описание

**Форма должна содержать следующие элементы:**

- выпадающий список с выбором башни (А или Б)
- выпадающий список с выбором этажа (с 3 по 27)
- выпадающий список с выбором переговорки. На каждом этаже 10 переговорок
- выбор даты и интервала времени (в произвольном виде, например выпадающие списки, data-picker)
- поле ввода комментария (textarea)
- кнопка "Отправить" (по нажатию - выводить в консоль данные формы в виде json)
- кнопка "Очистить" (по нажатию очищает форму)

## Установка

```sh
cd vk_booking-main
npm install
npm start
```

## Используемые технологии

- [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html) - Типизированный язык программирования;
- [React](https://ru.reactjs.org/) - JavaScript-библиотека для создания пользовательских интерфейсов;
- [Redux Toolkit](https://redux-toolkit.js.org/) - Библиотека для JavaScript, предназначенная для управления состоянием приложения;
- [Redux Persist](https://www.npmjs.com/package/redux-persist) - Библиотека для сохранения и восстановления состояния Redux в приложении;
- [React Router Dom](https://reactrouter.com/en/main) - JavaScript-библиотека для создания маршрутизации в веб-приложениях;
- [React Spring](https://react-spring.dev/docs) - Анимация приложения;
- [React Datepicker](https://www.npmjs.com/package/react-datepicker) - Поле ввода даты;
- [React Select](https://react-select.com/home) - Выподающий список для формы;
- [SASS](https://www.npmjs.com/package/sass) - Препроцессор для CSS;
- [useMemo](https://react.dev/reference/react/useMemo) - Хук из React JS, предназначен для вычесления данных только при их изменении;
- [BEM](https://ru.bem.info/methodology/quick-start/) - Методология для написания вёрстки сайта.

## Использование

- Главная страница:
  Ввод следующих данных:

  - Выбор башни: выбор здания для бронирования, на выбор два здания;
  - Выбор этажа: выбираем этаж на котором хотим сделать бронь, доступно с 3 по 27 этажы;
  - Дата: выбор даты, когда будет произведена бронь;
  - Время начала;
  - Продолжительность: на сколько часов производится аренда.
- Функционал:
  - Валидация кнопок: подсветка не введёных полей, а так же вывод уведомления об ошибке;
  - Очистка формы: возвращает в исходное состояние все поля.

- Страница результата поиска:
  Функционал:
  - Выбор зоны: можно выбрать как по нажатию на список, так и через нажатие на выбранную зону на изображении;
  - Поле ввода комментария: после того, как мы выбрали нужную зону, появляется поле для ввода комментария;
  - Отправка: при нажатии на кнопку "Отправить" в консоли высвечиваются данные в формате JSON такого рода:
```sh
{
    comment: "Всем из VK привет!!!",
    dateBooking: "2023-05-17T02:00:00.000Z",
    durationBooking: "6 hour(s)",
    levelTower: "6 level",
    selectedItem: 1,
    timeBooking: "5:00",
    typeOfTower:"B"
}
```
