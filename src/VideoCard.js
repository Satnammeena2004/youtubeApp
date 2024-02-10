import { Link } from 'react-router-dom';


function VideoCard({data}) {
  // console.log(data)

  const {snippet,statistics,id} = data;
  const {channelTitle,title,thumbnails} = snippet;

  return (
    <Link to={`/watch?v=${id?.videoId??id}`}>
    <div className="border  w-80 h-72 p-2 rounded-lg *:text-sm flex flex-col m-2 min-h-80 ">
      <div className="  border-slate-500 rounded-md h-44 flex justify-center items-center overflow-hidden min-h-44">
        <img alt="video" src={thumbnails?.medium?.url} className="rounded-md scale-y-105"/>
      </div>
      <div className="flex flex-col gap-y-2 h-1/2 pb-3">
        <p className="h-16 overflow-ellipsis font-semibold">{title}</p>
        <div className="flex items-center *:text-gray-700">
          <div className="w-8 rounded-full h-8 mr-2">
            <img className="rounded-full w-8 h-8" src={thumbnails?.high?.url} alt="thubnail"/>
          </div>
          <div className="flex-1">{channelTitle}</div>
        </div>
        <div className="flex gap-3 text-sm  *:text-gray-700">
            <span className="">{statistics?.viewCount}</span>
            <span className="text-white">|</span>
            <span className="">1 year ago</span>
        </div>
      </div>
    </div>
    </Link>
  );
}


export default VideoCard;