import React from 'react'
import SideBar from './SideBar'
import VideoList from './VideoList'
import Category from './Category'
import {Outlet} from "react-router-dom"

function Body() {
  return (
    <div className='dark flex '>
      <SideBar/>    
      <Outlet/>
    </div>
  )
}

export default Body
