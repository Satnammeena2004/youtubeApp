import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import VideoCard from "./VideoCard";
import { useGetSearchResultsQuery } from "./utils/searchListSlice";
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { YOUTUBE_API_KEY } from "./constant";
import { cacheResults } from "./utils/manualCacheSearchResultSlice";



function SearchResults() {
  const [searchParam] = useSearchParams();
  const [searchQueryResults, setSearchQueryResults] = useState([]);
  // const [count, setCount] = useState(6);
  // const {data,isLoading} = useGetSearchResultsQuery(searchParam.get("q"));
  const cache = useSelector((store) => store.searchResultsCache.cache);
   const dispatch = useDispatch()
  console.log("cahe", cache);

  useEffect(() => {
    async function getResults() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchParam.get(
            "q"
          )}&maxResults=25&key=` + YOUTUBE_API_KEY
        );
        const json = await res.json();
        setSearchQueryResults(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }

    getResults();

    if (cache[searchParam]) {
      console.log("cached used");
    } else {
      console.log("api call");
      dispatch(cacheResults({
        [searchParam]:["params"]
      }))
    }
  }, [searchParam, cache,dispatch]);

  if (searchQueryResults === 0) {
    return <h1>Loading Search Results for -{searchParam.get("q")}</h1>;
  }

  return (
    <div className="w-full">
      <h1>Serach Result - {searchParam.get("q")}</h1>
      <div className="grid grid-cols-3 bg-[#0f0f0f] gap-4 h-screen overflow-y-scroll">
        {searchQueryResults?.items?.map((result) => (
          <VideoCard key={result.etag} data={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
