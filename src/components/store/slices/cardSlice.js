import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    smallCard: false,
    bigCard: false 
  },
  reducers: {
    setCard: (state, action) => {

      const { name, value } = action.payload

      return {
        ...state,
        [name]: value
      }
    }
  }
})

export const { setCard } = cardSlice.actions

export default cardSlice.reducer