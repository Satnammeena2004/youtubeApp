import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { condtionalURL, YOUTUBE_API_KEY } from "./constant";
import EmbedVideo from "./EmbedVideo";
import WatchPageCard from "./WatchPageCard";

function WatchPage() {
  const [videoDetail, setVideoDetail] = useState([]);
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  useEffect(() => {
    async function getVideoDetail() {
      const videoDetailFetching = await fetch(
        condtionalURL(`id=${searchParam.get("v")}&key=` + YOUTUBE_API_KEY)
      );
      const videoDetail = await videoDetailFetching.json();
      console.log("videoDetaile", videoDetail);
      // setVideoDetail(videoDetail)
    }

    getVideoDetail();
  }, [searchParam]);

  return (
    <div className="p-2  px-20 flex justify-between w-full bg-[#0f0f0f] flex-col">
      <EmbedVideo id={searchParam.get("v")} />
      <WatchPageCard/>
      <Comments />
      {/* <LiveChat /> */}
    </div>
  );
}

export default WatchPage;
