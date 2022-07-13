import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    occupation: '',
    address: ''
  },
  reducers: {
    setUser: (state, action) => {

      const { name, value } = action.payload

      return {
        ...state,
        [name]: value
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
