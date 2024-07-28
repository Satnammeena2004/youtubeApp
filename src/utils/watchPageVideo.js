
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YOUTUBE_API_KEY } from '../constant';

const watchPage = createApi({
      reducerPath:"fetchWatchPageVideo",
      baseQuery:fetchBaseQuery({baseUrl: "https://youtube.googleapis.com/youtube/v3/"}),
      endpoints:(builder)=>({
        getWatchPageById:builder.query({
            query:(q)=>`videos?part=snippet%2CcontentDetails%2Cstatistics&id=${q})}&key=` + YOUTUBE_API_KEY,
        })
        
      })

})

export const {useGetWatchPageByIdQuery} = watchPage;

export default watchPage;