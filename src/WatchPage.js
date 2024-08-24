import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { condtionalURL, YOUTUBE_API_KEY } from "./constant";
import EmbedVideo from "./EmbedVideo";
import WatchPageCard from "./WatchPageCard";




function WatchPage() {
  const [searchParam] = useSearchParams();
  console.log("search param",searchParam.get("v"));
 

  return (
    <div className="p-2  px-20 flex justify-between w-full bg-[#0f0f0f] flex-col no-scrollbar overflow-y-scroll">
      <EmbedVideo id={searchParam.get("v")} />
      <WatchPageCard  searchParam={searchParam}/>
      <Comments />
    </div>
  );
}

export default WatchPage;
