import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { YOUTUBE_API_KEY } from "./constant";
import { cacheResults } from "./utils/manualCacheSearchResultSlice";
import Category from "./Category";



function SearchResults() {
  const [searchParam] = useSearchParams();
  const [searchQueryResults, setSearchQueryResults] = useState([]);

  const cache = useSelector((store) => store.searchResultsCache.cache);
  const dispatch = useDispatch()
  console.log("serach result renders")
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
        return json;
      } catch (error) {
        console.log(error);
      }
    }

    if (cache[searchParam.get("q")]) {
      console.log("cached used", cache);
      setSearchQueryResults(cache[searchParam.get("q")])

    } else {
      console.log("api call");
      getResults().then((result)=>{
        dispatch(cacheResults({[searchParam.get("q")]:result}))
      })
    }
  }, [searchParam, dispatch,cache]);

  if (searchQueryResults.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#0f0f0f] no-scrollbar ">
      <Category />
      <div className="p-2 grid grid-flow-row grid-cols-3 h-screen overflow-y-scroll no-scrollbar mt-8">
        {searchQueryResults?.items?.map((result) => (
          <VideoCard key={result.etag} data={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
