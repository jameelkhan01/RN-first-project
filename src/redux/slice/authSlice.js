import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    count: 0
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  
    },
    setCount: (state,action)=>{
      state.count = action.payload
    }
  },
});

export const { login,setCount } = authSlice.actions;

export default authSlice.reducer;
