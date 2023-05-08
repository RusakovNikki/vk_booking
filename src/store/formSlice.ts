import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Form = {
  typeOfTower: string
  levelTower: string
  timeBooking: string
  durationBooking: string
  dateBooking: string | null
  selectedItem: number
  comment: string
}

const initialState: Form = {
  typeOfTower: "",
  levelTower: "",
  dateBooking: null,
  timeBooking: "",
  durationBooking: "",
  selectedItem: 0,
  comment: "",
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
    setSelectedItem(state, action: PayloadAction<number>) {
      state.selectedItem = action.payload
    },
    setComment(state, action: PayloadAction<string>) {
      state.comment = action.payload
    },
    setDefaultValue(state) {
      state.durationBooking = initialState.durationBooking
      state.levelTower = initialState.levelTower
      state.timeBooking = initialState.timeBooking
      state.typeOfTower = initialState.typeOfTower
      state.dateBooking = initialState.dateBooking
      state.selectedItem = initialState.selectedItem
      state.comment = initialState.comment
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
  setSelectedItem,
  setComment,
} = formSlice.actions

export default formSlice.reducer
