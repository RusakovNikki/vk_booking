export const getNormalDate = (date: Date) => {
  const newDate = new Date(date)
  newDate.setHours(newDate.getHours() + 5)
  return newDate.toISOString()
}
