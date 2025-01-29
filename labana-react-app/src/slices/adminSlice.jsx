import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    admin:{adminname:'',islogin:false}
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setadmin: (state, action) => {
      state.admin = action.payload
    },
  },
});

export const { setadmin } = sliceName.actions;

export default sliceName.reducer;