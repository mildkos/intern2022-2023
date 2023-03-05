import { AppState } from "./../store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IProfile {
  isLoggedIn: boolean
  username: string | undefined
  cash: number
}

const initialState: IProfile = {
  isLoggedIn: false,
  username: undefined,
  cash: 0
}

const profileSlices = createSlice({
  name: "profile",
  initialState,
  reducers: {
    SIGNIN: (
      state,
      action: PayloadAction<{ username: string; cash: number }>
    ) => {
      state.isLoggedIn = true
      state.username = action.payload.username
      state.cash = action.payload.cash
    },
    SIGNOUT: () => initialState
  }
})

export const getProfile = (state: AppState) => state.profile

export const { SIGNIN, SIGNOUT } = profileSlices.actions

export default profileSlices.reducer
