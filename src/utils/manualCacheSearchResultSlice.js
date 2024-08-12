import {createSlice} from "@reduxjs/toolkit";

 

const manualCacheSearchResults = createSlice({
  name: "searchResultsCache",
  initialState: {
    cache: {},
    
  },
  reducers:{
    cacheResults:(state,action)=>{
      console.log(action,state)
        state.cache ={...action.payload,...state.cache};
    }
  }
});

export const {cacheResults} = manualCacheSearchResults.actions;

export default manualCacheSearchResults.reducer;
