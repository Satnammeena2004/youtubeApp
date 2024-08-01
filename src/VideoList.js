import React from 'react'
import Category from './Category'
import VideoCard from './VideoCard'

import { useGetDataQuery } from './utils/dataSlice';




function VideoList() {
const {isLoading,data} = useGetDataQuery()
if (isLoading) {
  return <h1>Loading....</h1>
}
console.log(data);

  return (
    <div className='w-full  bg-[#0f0f0f]'>
        <Category/>
    <div className='p-2 grid grid-flow-row grid-cols-3 h-screen overflow-y-scroll no-scrollbar'>
     {
      data?.items.map((item,i)=><VideoCard key={i} data={item}/>)
     }
      
    </div>
    </div>
  )
}

export default VideoList
