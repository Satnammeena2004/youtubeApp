import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {YOUTUBE_API_KEY} from "../constant";

const searchListApi = createApi({
  reducerPath: "serachResults",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=`,
  }),

  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (q) =>{console.log(q); return `${q}&maxResults=25&key=${YOUTUBE_API_KEY}`},
    providesTags :(result,error,id)=> {  return [id]}
    }),
  }),
});


export const {useGetSearchResultsQuery} = searchListApi;

export default searchListApi;