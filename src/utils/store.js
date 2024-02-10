
import { configureStore } from '@reduxjs/toolkit';
import fetchData from './dataSlice';
import liveChatSlice from '../utils/liveChat'
import searchListApi from './searchListSlice';
import manualCacheSearchResultSlice from './manualCacheSearchResultSlice';

const store = configureStore({
    reducer:{
        chat: liveChatSlice,
        [fetchData.reducerPath]:fetchData.reducer,
        [searchListApi.reducerPath]:searchListApi.reducer,
        searchResultsCache:manualCacheSearchResultSlice

    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(fetchData.middleware,searchListApi.middleware);
    }
})


export default store;