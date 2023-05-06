export function getTime(number: number): string {
  if (number % 10 === 1 && number % 100 !== 11) {
    return "час"
  } else if (
    [2, 3, 4].includes(number % 10) &&
    ![12, 13, 14].includes(number % 100)
  ) {
    return "часа"
  } else {
    return "часов"
  }
}
