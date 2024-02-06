import React from 'react'
import Category from './Category'
import VideoCard from './VideoCard'

function VideoList() {
  return (
    <div className='border-2 w-full'>
    <div>
        <Category/>
    </div>
    <div className='p-2 bg-zinc-400'>
      <VideoCard/>
    </div>
    </div>
  )
}

export default VideoList
