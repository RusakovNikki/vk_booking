import { IOptionsSelect } from "../types"
import { getTime } from "../utils/getTime"

export const towers: IOptionsSelect[] = [
  { value: "A", label: "Башня А" },
  { value: "B", label: "Башня Б" },
]

export const levels: IOptionsSelect[] = new Array(25).fill({}).map((_, i) => ({
  value: `${i + 3} level`,
  label: `${i + 3} этаж`,
}))

export const time: IOptionsSelect[] = new Array(24).fill({}).map((_, i) => ({
  value: `${i}:00`,
  label: `${i}:00`,
}))

export const duration: IOptionsSelect[] = new Array(24)
  .fill({})
  .map((_, i) => ({
    value: `${i + 1} hour(s)`,
    label: `${i + 1} ${getTime(i + 1)}`,
  }))

export const office = [
  {
    id: 1,
    square: 82.2,
    price: 2400,
  },
  {
    id: 2,
    square: 83.8,
    price: 2400,
  },
  {
    id: 3,
    square: 38.8,
    price: 1800,
  },
  {
    id: 4,
    square: 35.2,
    price: 1700,
  },
  {
    id: 5,
    square: 38.5,
    price: 1800,
  },
  {
    id: 6,
    square: 38.5,
    price: 1800,
  },
  {
    id: 7,
    square: 86.3,
    price: 2600,
  },
  {
    id: 8,
    square: 81.1,
    price: 2500,
  },
  {
    id: 9,
    square: 92.5,
    price: 3000,
  },
  {
    id: 10,
    square: 96.2,
    price: 3100,
  },
]
