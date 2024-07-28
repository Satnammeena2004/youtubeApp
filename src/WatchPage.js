import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
// import VideoCard from './VideoCard';


function WatchPage() {
  const [video] = useState([1]);
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  // useEffect(() => {
  //   async function getVideo() {
  //     try {
  //       const res = await fetch(
  //         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParam.get(
  //           "v"
  //         )}&key=` + YOUTUBE_API_KEY
  //       );

  //       const json = await res.json();
  //       setVideo(json.items[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   // getVideo();
  // }, [searchParam]);

  if (video.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-2  px-20 flex justify-between w-full">
      <div className="">
        <h1 className="p-1 text-center font-bold text-2xl ">Watch Page</h1>
        {/* <div className="h-60  shadow-lg"></div> */}
        <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${searchParam.get("v")}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* <VideoCard data={video}/> */}
        <div>
          <Comments />
        </div>
      </div>

      <div className="p-2 shadow-lg bg-slate-100">
        <LiveChat />
      </div>
    </div>
  );
}

export default WatchPage;
