import React from "react";

function Header() {
  return (
    <div className="flex justify-between  border-2 shadow-md mb-2 p-2">
      <div className="flex gap-2">
        <span>📔</span>
        <img alt="Youtbde logo" src="" />
      </div>
      <div className="w-2/4 ">
        
      <input type="text" placeholder="serach" className="peer p-2 border-gray-300 border rounded-sm w-2/3 rounded-l-full   "  />
      <button className="p-2 border  outline-lime-100 rounded-r-full">🔍</button>
      </div>
      <div className="">
       ➕
      </div>
    </div>
  );
}

export default Header;
