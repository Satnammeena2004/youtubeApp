import React from 'react'
import { NavLink } from 'react-router-dom'
import Category from "./Category";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdPlaylistAddCheckCircle } from "react-icons/md";


function ReactIcons({children,name}){

  return (
    <div className='flex flex-col py-6  hover:bg-gray-100/10 rounded-lg items-center cursor-pointer'>
  <span className=''>{children}</span>
  <span className='text-[10px]'>{name}</span>
    </div>
  )
}



function SideBar() {
  return (
    <>
      <div className='sticky top-[3.6rem] bg-[#0f0f0f] text-white'>
        <div className='flex flex-col gap-y-4 p-4'>
   
          <ReactIcons name={"Home"}> <GoHome /></ReactIcons>
          <ReactIcons name={"Shorts"}> <SiYoutubeshorts /></ReactIcons>
          <ReactIcons name={"Subscription"}> <MdOutlineSubscriptions /></ReactIcons>
          <ReactIcons name={"You"}> <MdPlaylistAddCheckCircle /></ReactIcons>

        </div>
      </div>
    </>
  )
}

export default SideBar