import { createSlice } from "@reduxjs/toolkit"

interface ICartList {
  id: string
  img: string
  alt?: string
  name: string
  amount: number
  price: number
}

interface ICart {
  cardList: Array<ICartList>
}

const initialState: ICart = {
  cardList: []
}

const cartSlices = createSlice({
  name: "cart",
  initialState,
  // SET_CART, CLEAR_CART
  reducers: {}
})

// export const getCart

export const {} = cartSlices.actions

export default cartSlices.reducer
