import React from 'react'
import SideBar from './SideBar'
import VideoList from './VideoList'
import Category from './Category'

function Body() {
  return (
    <div className=' flex'>
      <SideBar/>    
      <VideoList/>
    </div>
  )
}

export default Body
