function VideoCard({data}) {
  return (
    <div className="border border-blue-400 w-52 h-60 p-2 rounded-sm">
      <div className="h-32 border border-slate-500 rounded-sm">
        <img alt="video" src="" />
      </div>
      <div>
        <p>Lorem Ipsum</p>
        <div className="flex items-center">
          <div className="w-10 rounded-full h-10 bg-gray-300 mx-2"></div>
          <div>Hello</div>
        </div>
        <div className="divide-x-2 ">
            <span className="">100K</span>
            <span className="">1 year ago</span>
        </div>
      </div>
    </div>
  );
}


export default VideoCard;