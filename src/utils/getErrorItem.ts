import { Form } from "../store/formSlice"

export function getErrorItem(form: Form): string {
  const keys: Array<string> = Object.keys(form)

  for (let i = 0; i < keys.length; i++) {
    const res: string = keys[i]

    if (!form[res as keyof Form]) {
      return `Ошибка в поле ${res}. Необходимо заполнить поле`
    }
  }

  return ""
}
