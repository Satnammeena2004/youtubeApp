import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
  return (
    <>
    <div className='w-52  bg-gray-200 h-96 overflow-y-scroll'>
    <h1 className='font-bold p-2'>Home</h1>
     <ul>
        <li className='p-1 pl-4 mb-1 hover:bg-gray-300 rounded-sm'><NavLink to={"/"} >  Home</NavLink></li>
        <li className='p-1 pl-4 mb-1 hover:bg-gray-300 rounded-sm'>Shorts</li>
        <li className='p-1 pl-4 mb-1 hover:bg-gray-300 rounded-sm'>Subscriptions</li>
   
       </ul>    
    </div>
    </>
  )
}

export default SideBar