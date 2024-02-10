import React from 'react'
import Category from './Category'
import VideoCard from './VideoCard'

import { useGetDataQuery } from './utils/dataSlice';




function VideoList() {
const {isLoading,data} = useGetDataQuery()
// console.log(data);
  if (isLoading) {
     return <h1>Loading....</h1>
  }

  return (
    <div className='border-2 w-full'>
    <div>
        <Category/>
    </div>
    <div className='p-2 grid grid-flow-row grid-cols-3'>
     {
      data?.items.map((item,i)=><VideoCard key={i} data={item}/>)
     }
      
    </div>
    </div>
  )
}

export default VideoList
