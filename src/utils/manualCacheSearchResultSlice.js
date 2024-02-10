import {createSlice} from "@reduxjs/toolkit";

 

const manualCacheSearchResults = createSlice({
  name: "searchResultsCache",
  initialState: {
    cache: {},
    
  },
  reducers:{
    cacheResults:(state,action)=>{
        state ={...action.payload,...state};
    }
  }
});

export const {cacheResults} = manualCacheSearchResults.actions;

export default manualCacheSearchResults.reducer;
