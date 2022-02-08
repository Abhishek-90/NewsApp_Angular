import { createReducer, on } from "@ngrx/store"
import { setDarkMode } from "./Actions"

export const initialState = {
    enabled: localStorage.getItem('darkMode') === 'true',
}

export const DarkModeReducer = createReducer(
    initialState,
    on(setDarkMode, (state) => {return {...state, enabled: !state.enabled}}),
)
