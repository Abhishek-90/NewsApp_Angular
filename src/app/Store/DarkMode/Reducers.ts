import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { setDarkMode } from "./Actions"

export const initialState = {
    enabled: false,
}

export const DarkModeReducer = createReducer(
    initialState,
    on(setDarkMode, (state) => {return {...state, enabled: !state.enabled}}),
)
