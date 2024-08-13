import {createSlice} from "@reduxjs/toolkit";

 

const manualCacheSearchResults = createSlice({
  name: "searchResultsCache",
  initialState: {
    cache: {},
    sidebarVisibility:false
  },
  reducers:{
    cacheResults:(state,action)=>{
      console.log(action,state)
        state.cache ={...action.payload,...state.cache};
    }
    ,
    changeVisibilityOfSideBar:(state,action)=>{
          state.sidebarVisibility = action.payload;
    }
  }
});

export const {cacheResults,changeVisibilityOfSideBar} = manualCacheSearchResults.actions;

export default manualCacheSearchResults.reducer;
