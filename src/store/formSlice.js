import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        typeOfTower: "",
        levelTower: "",
        timeBooking: "",
        durationBooking: ""
    },
    reducers: {
        setTypeOfTower(state, action) {
            state.typeOfTower = action.payload
        },
        setLevelTower(state, action) {
            state.levelTower = action.payload
        },
        setTimeBooking(state, action) {
            state.timeBooking = action.payload
        },
        setDurationBooking(state, action) {
            state.durationBooking = action.payload
        }
    },
})

export const { setDurationBooking, setLevelTower, setTimeBooking, setTypeOfTower } = formSlice.actions

export default formSlice.reducer