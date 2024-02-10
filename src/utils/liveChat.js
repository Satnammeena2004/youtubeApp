import {createSlice} from '@reduxjs/toolkit'


const liveChatSlice =createSlice({
    name:"chat",
    initialState:{
        chats:[{author:"John",message:"hello my team is winnigs"},{author:"satnam",message:"FUCK YOU !"}]
    },
    reducers:{
        addChat:(state,action)=>{
            
              state.chats.splice(10,1);
              state.chats.unshift(action.payload);
        }
    } 
    
})


export const {addChat} = liveChatSlice.actions;

export default liveChatSlice.reducer;