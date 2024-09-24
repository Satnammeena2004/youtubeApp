import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import {
  condtionalURL,
  formatNumber,
  timeAgo,
  YOUTUBE_API_KEY,
} from "./constant";

function CustomButton({ children, className }) {
  return (
    <button className={className + " rounded-full bg-gray-500/45 p-2"}>
      {children}
    </button>
  );
}


function CommentCount({commentCount=0}){

  return (
  <div className="p-3 mt-10 font-bold bg-gray-500/35">
  <span>Comments:{formatNumber(commentCount)}</span>
  </div>)
}


function Description({ description, views, publishedAt }) {
  const [showLines, setShowLines] = useState(2);
  let arr = description.split("\n");
  return (
    <div className="p-2 bg-gray-500/35 rounded-md mt-5 ">
      <div className="flex gap-x-2">
        <span className="text-xs font-semibold">{formatNumber(views)}</span>
        <span className="text-xs font-semibold">{timeAgo(publishedAt)}</span>
      </div>
      <div className="flex flex-col text-sm">
        {arr.slice(0, showLines).map((para) => (
          <span>{para}</span>
        ))}
        {showLines === 2 ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              setShowLines(arr?.length);
            }}
          >
            ...More
          </span>
        ) : (
          <span
            className="cursor-pointer"
            onClick={() => {
              setShowLines(2);
            }}
          >
            ...less
          </span>
        )}
      </div>
      {/* <p className="text-sm">{description}</p>/ */}
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

      setVideoDetail(video);
    }

    getVideoDetail();
  }, [searchParam]);

  if (videoDetail.length === 0) {
    return <h1>Loading...</h1>;
  }

  const {
    snippet: { channelTitle, description, publishedAt, title },
    statistics: { likeCount, commentCount, viewCount },
  } = videoDetail.items[0];
console.log("commentCount",commentCount);
  return (
    <div className="p-2 *:text-slate-50 w-2/3">
      <div className="p-2">{title}</div>
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
          <CustomButton className={"bg-zinc-50 text-black/90 text-sm py-0.5  px-5"}>
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
      <Description
        description={description}
        views={viewCount}
        publishedAt={publishedAt}
      />
      <CommentCount  commentCount={commentCount}/>
    </div>
  );
}

export default WatchPageCard;
