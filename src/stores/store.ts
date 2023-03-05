import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import profileReducer from "@stores/slices/profileSlices"

export function makeStore() {
  return configureStore({
    reducer: { profile: profileReducer },
    devTools: process.env.NEXT_PUBLIC_MODE !== "production"
  })
}
const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
