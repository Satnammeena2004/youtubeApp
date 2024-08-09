import { Link } from 'react-router-dom';


function VideoCard({ data }) {
  // console.log(data)

  const { snippet, statistics, id } = data;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;


  function dateDiff(a) {
    const date1 = new Date();
    const date2 = new Date(a);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }


  function viewCount(view) {
    let views = view;
    if (views < 1000) {
      return views.toString();
    }
    else if (views > 1000) {
      let thounsand = views / 1000;
      if (thounsand > 1000) {
        let million = thounsand / 1000;
        return `${million.toFixed(1)}M`;
      } else {
        return `${thounsand.toFixed(0)}K`;
      }
    }
  }


  return (
    <Link to={`/watch?v=${id?.videoId ?? id}`}>
      <div className="  p-2 rounded-lg *:text-sm flex flex-col m-2 min-h-80 text-[#f1f1f1] hover:scale-105 transition-transform">
        <div className=" border-slate-500 rounded-2xl  flex justify-center items-center max-h-52 overflow-hidden min-h-44">
          <img alt="video" src={thumbnails?.high?.url} className="rounded-md scale-y-105 " />
        </div>
        <div className='flex'>
          <div className='min-w-10 relative '>
            <div>

            <img className="rounded-full absolute top-4  w-8 h-8 float-left" src={thumbnails?.high?.url} alt="thubnail" />
            </ div>

          </div>
          <div className="flex flex-col gap-y-1.5 h-1/2 pb-3 py-2 ">
            <p className=" overflow-ellipsis line-clamp-2 font-semibold *:text-[#f1f1f1]">{title}</p>
            <div className="flex-1 text-gray-400 font-normal">{channelTitle}</div>
            <div className="flex gap-3 text-xs *:text-gray-400 *:font-light items-center">
              <span className="">{viewCount(statistics?.viewCount)} views</span>
              <span className="bg-gray-500 w-1 h-1 rounded-full "></span>
              <span className="">{dateDiff(publishedAt) + ' days ago'}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default VideoCard;