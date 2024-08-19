import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { condtionalURL, YOUTUBE_API_KEY } from "./constant";
import EmbedVideo from "./EmbedVideo";

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
    <div className="p-2  px-20 flex justify-between w-full bg-[#0f0f0f]">
      <div className="">
        <h1 className="p-1 text-center font-bold text-2xl ">Watch Page</h1>
        {/* <div className="h-60  shadow-lg"></div> */}
        <EmbedVideo id={searchParam.get("v")} />
        <div>
          <Comments />
        </div>
      </div>

      <div className="p-2 shadow-lg  bg-[#0f0f0f]">
        <LiveChat />
      </div>
    </div>
  );
}

export default WatchPage;
