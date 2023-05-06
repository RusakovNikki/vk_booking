import { IOptionsSelect } from "../types"
import { getTime } from "../utils/getTime"

export const towers: IOptionsSelect[] = [
  { value: "A", label: "Башня А" },
  { value: "B", label: "Башня Б" },
]

export const levels: IOptionsSelect[] = new Array(24).fill({}).map((_, i) => ({
  value: `${i + 3}`,
  label: `${i + 3} этаж`,
}))

export const time: IOptionsSelect[] = new Array(24).fill({}).map((_, i) => ({
  value: `${i}`,
  label: `${i}:00`,
}))

export const duration: IOptionsSelect[] = new Array(24)
  .fill({})
  .map((_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1} ${getTime(i + 1)}`,
  }))
