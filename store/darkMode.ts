import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DarkModeState } from "./reduxState"


const initialState: DarkModeState = {
    isDarkMode: false
}

const darkMode = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.isDarkMode = action.payload;
        }
    }
})

export const darkModeActions = { ...darkMode.actions };

export default darkMode;