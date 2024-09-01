import React, { useEffect, useRef, useState, useCallback } from "react";
import Category from "./Category";
import VideoCard from "./VideoCard";

import { useGetDataQuery } from "./utils/dataSlice";
import ShimmerList, { Shimmer, Shimmers } from "./Shimmer";

function VideoList() {
  const { isLoading, data } = useGetDataQuery();
  const [HowMuch, setHowMuch] = useState(9);
  const [showShimmer, setShowShimmer] = useState(false);
  const ref = useRef(null);
  let flag = useRef(true);
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Memoized onScroll function
  const onScroll = useCallback(
    debounce(() => {
      if (!ref.current) return;
      const elem = ref.current;
      const SH = elem.scrollHeight;
      const ST = elem.scrollTop;
      const CH = elem.clientHeight;
      const value = SH - (ST + CH);

      if (value <= 150 && flag.current) {
        flag.current = false;
        setShowShimmer(true);
        setTimeout(() => {
          setShowShimmer(false);
          setHowMuch((prev) => prev + 6); // Increment the video count
          flag.current = true;
          console.log("call the API....");
        }, 2000);
      }
    }, 200), // Debounce delay
    [HowMuch]
  );

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    elem.addEventListener("scroll", onScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      elem.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  if (isLoading) {
    return <ShimmerList count={6} />;
  }
  console.log(data);

  return (
    <div className="w-full  bg-[#0f0f0f]">
      <Category />
      <div
        ref={ref}
        id="scrollable"
        className="p-2 grid grid-flow-row grid-cols-3 h-screen overflow-y-scroll no-scrollbar mt-8"
      >
        {data?.items.slice(0, HowMuch).map((item, i) => (
          <VideoCard key={i} data={item} />
        ))}
        {showShimmer && <Shimmers count={3} />}
      </div>
    </div>
  );
}

export default VideoList;
