import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Form = {
  typeOfTower: string
  levelTower: string
  timeBooking: string
  durationBooking: string
}

const initialState: Form = {
  typeOfTower: "",
  levelTower: "",
  timeBooking: "",
  durationBooking: "",
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
  },
})

export const {
  setDurationBooking,
  setLevelTower,
  setTimeBooking,
  setTypeOfTower,
} = formSlice.actions

export default formSlice.reducer
