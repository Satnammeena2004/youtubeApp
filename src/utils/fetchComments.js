import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { YOUTUBE_API_KEY } from '../constant';

const fetchComments = createApi({
      reducerPath:"fetchComments",
      baseQuery:fetchBaseQuery({baseUrl: "https://youtube.googleapis.com/youtube/v3/"}),
      endpoints:(builder)=>({
        getCommentsById:builder.query({
            query:(id)=>`commentThreads?part=snippet%2Creplies&maxResults=25&videoId=${id}&key=` + YOUTUBE_API_KEY,
            providesTags:[(args)=>console.log("args"+args)]
        })
        
      })

})

export const {useGetCommentsByIdQuery} = fetchComments;

export default fetchComments;