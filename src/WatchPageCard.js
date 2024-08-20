import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import { condtionalURL, formatNumber, YOUTUBE_API_KEY } from "./constant";

function CustomButton({ children, className }) {
  return (
    <button className={className + " rounded-full bg-gray-500/45 p-2"}>
      {children}
    </button>
  );
}

// function Description(){

//   return (
//     <div>

//     </div>
//   )
// }

function Description({ description, views }) {
  return (
    <div className="p-2 bg-gray-500/45 rounded-md mt-5">
      <div>
        <span className="text-xs">{formatNumber(views)}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}

function WatchPageCard({ searchParam }) {
  const [videoDetail, setVideoDetail] = useState([]);

  useEffect(() => {
    async function getVideoDetail() {
      const videoDetailFetching = await fetch(
        condtionalURL(`id=${searchParam.get("v")}&key=` + YOUTUBE_API_KEY)
      );
      const video = await videoDetailFetching.json();
      console.log(video);
      setVideoDetail(video);
    }

    getVideoDetail();
  }, [searchParam]);

  if (videoDetail.length === 0) {
    return <h1>Loading...</h1>;
  }

  const {
    snippet: { channelTitle, description, channelId, title },
    statistics: { likeCount, commentCount, viewCount },
  } = videoDetail.items[0];

  return (
    <div className="  p-2 *:text-slate-50 w-2/3">
      <div>{title}</div>
      <div className="p-2  flex justify-between">
        <div className="flex gap-x-2">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://i.ytimg.com/vi/jxCRlebiebw/mqdefault.jpg"
              alt="youtube img"
            />
          </div>
          <div>
            <h3>{channelTitle}</h3>
            <p className="text-xs text-slate-100/80">2.2M subscribers</p>
          </div>
          <CustomButton className={"text-zinc-50 text-sm py-0.5  px-5"}>
            subscribe
          </CustomButton>
        </div>
        <div className="flex gap-x-2">
          <CustomButton className={"w-32"}>
            <div className="flex  w-full justify-between h-full  items-center">
              <div className="flex items-center justify-center gap-x-1">
                <AiOutlineLike className="text-xl" />
                <span className="text-sm">{formatNumber(likeCount)}</span>
              </div>
              <span className="w-0.5 h-5/6 bg-gray-500/55 inline-block"></span>
              <AiOutlineDislike className="text-xl" />
            </div>
          </CustomButton>
          <CustomButton>
            <IoIosShareAlt className="text-xl" />
          </CustomButton>
          <CustomButton>
            <MdMoreHoriz className="text-xl" />
          </CustomButton>
        </div>
      </div>
      <Description description={description} views={viewCount} />
    </div>
  );
}

export default WatchPageCard;
