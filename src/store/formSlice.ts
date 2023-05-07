import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Form = {
  typeOfTower: string
  levelTower: string
  timeBooking: string
  durationBooking: string
  dateBooking: string
}

const initialState: Form = {
  typeOfTower: "",
  levelTower: "",
  timeBooking: "",
  durationBooking: "",
  dateBooking: new Date().toISOString(),
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTypeOfTower(state, action: PayloadAction<string>) {
      state.typeOfTower = action.payload
    },
    setLevelTower(state, action: PayloadAction<string>) {
      state.levelTower = action.payload
    },
    setTimeBooking(state, action: PayloadAction<string>) {
      state.timeBooking = action.payload
    },
    setDurationBooking(state, action: PayloadAction<string>) {
      state.durationBooking = action.payload
    },
    setDateBooking(state, action: PayloadAction<string>) {
      state.dateBooking = action.payload
    },
    setDefaultValue(state) {
      state.durationBooking = initialState.durationBooking
      state.levelTower = initialState.levelTower
      state.timeBooking = initialState.timeBooking
      state.typeOfTower = initialState.typeOfTower
      state.dateBooking = initialState.dateBooking
    },
  },
})

export const {
  setDurationBooking,
  setLevelTower,
  setTimeBooking,
  setTypeOfTower,
  setDefaultValue,
  setDateBooking,
} = formSlice.actions

export default formSlice.reducer
