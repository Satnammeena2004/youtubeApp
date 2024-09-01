import React from 'react'
import SideBar from './SideBar'
import {Outlet} from "react-router-dom"

function Body() {
  return (
    <div className='dark flex w-full'>
      <SideBar/>    
      <Outlet/>
    </div>
  )
}

export default Body
