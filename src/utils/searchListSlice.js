import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {YOUTUBE_API_KEY,YOUTUBE_API_BASE_URL} from "../constant";

const searchListApi = createApi({
  reducerPath: "serachResults",
  baseQuery: fetchBaseQuery({
    baseUrl: YOUTUBE_API_BASE_URL+`search?part=snippet%2CcontentDetails%2Cstatistics&q=`,
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