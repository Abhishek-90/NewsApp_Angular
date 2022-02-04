import { createReducer, on } from "@ngrx/store";
import { setDarkMode } from "./Actions";

interface darkModeState {
    enabled: boolean;
}

const initialState: darkModeState = {
    enabled: false
}

export const DarkModeReducer = createReducer(
    initialState,
    on(setDarkMode, (state: darkModeState) => ({...state, enabled: !state.enabled}))
)
