import { StatesInterface } from "@/interfaces/states"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: StatesInterface = {
    isDarkMode: true,
    isDrawerOpen: true
}

const stateSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
        setDrawerOpen: (state, action: PayloadAction<boolean>) => {
            state.isDrawerOpen = action.payload;
        }
    }
});

export default stateSlice.reducer;
export const { setDarkMode, setDrawerOpen } = stateSlice.actions;