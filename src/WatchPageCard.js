import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

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

function WatchPageCard() {
  return (
    <div className="  p-2 *:text-slate-50 w-2/3">
      <div>TItle satnam meena Hello</div>
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
            <h3>T-series</h3>
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
              <span className="text-sm">100K</span>
              </div>
              <span className="w-0.5 h-5/6 bg-gray-500/55 inline-block"></span>
              <AiOutlineDislike className="text-xl" />
            </div>
          </CustomButton>
          <CustomButton>
            <IoIosShareAlt className="text-xl"/>
          </CustomButton>
          <CustomButton>
            <MdMoreHoriz className="text-xl" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default WatchPageCard;
