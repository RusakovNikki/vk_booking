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

// export const db = [
//   {
//     id: 1,
//     tower: "A", //A, B
//     level: 3, //3,4...27
//     number: 1, //1,2...10,
//     time: [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23,
//     ],
//     duration: [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//       22, 23,
//     ],
//   },
// ]
