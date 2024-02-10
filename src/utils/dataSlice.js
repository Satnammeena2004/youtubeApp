import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../constant';


const fetchData = createApi({
    reducerPath:"youtube",
    tagTypes:[YOUTUBE_API_KEY],
    baseQuery:fetchBaseQuery({baseUrl:YOUTUBE_API_URL+YOUTUBE_API_KEY}),
    endpoints:(builder)=>({
        getData :builder.query({
            query:()=>"",
            providesTags:[YOUTUBE_API_KEY]
        })
        
    })
    
})


export const {useGetDataQuery} = fetchData; 

export default fetchData;