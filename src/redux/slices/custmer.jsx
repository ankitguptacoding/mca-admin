import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  custmerList: []
}
const custmerInfo = createSlice({
    name: "custmer",
    initialState,
    reducers: {
        getCustmers: (state , action)=>{
            state.custmerList.push(action.payload);
        },
        removeCustmer: (state, action) => {
          state.custmerList = state.custmerList.filter((custmer)=> custmer.id !== action.payload);         
        },

    },
})

export const {getCustmers, removeCustmer} = custmerInfo.actions;
export default custmerInfo.reducer;