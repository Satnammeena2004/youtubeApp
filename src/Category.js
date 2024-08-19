import React, { useEffect, useRef, useState } from 'react'
import { VIDEO_CATEGORY_API_URL, YOUTUBE_API_KEY } from './constant';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
// const category = ["Music","Cricket","Comedy","Movie","Secns","Satnd up","Video","Trendig","Cricket","Cricket","Cricket"]



function Category() {
const ref     = useRef(null);
const [category,setCategory] = useState([])
const  navigate = useNavigate();

 function handleCLick(to){
  navigate("/search?q="+to?.toLowerCase());
 }
  

 useEffect(()=>{

  async function getCategories(){
      const data =await fetch(VIDEO_CATEGORY_API_URL+YOUTUBE_API_KEY);
      const json = await data.json();
   setCategory(json.items);
  }
  getCategories()
 },[])

 if(category.length===0){
  return <h1>Loading..</h1>
 }

  return (
    // <div>Category</div>
    <div ref={ref} className='p-2 flex overflow-x-scroll no-scrollbar scroll-smooth  bg-[#0f0f0f] fixed w-full z-[2] '>
      <button onClick={(e)=>{
          ref.current.scrollBy(100,0);
      }} className='fixed right-4'><IoIosArrowForward className='text-xl text-white bg-black '/></button>
      {
        category.map((category)=><button key={category.id} onClick={()=>handleCLick(category.snippet.title)} className='px-2 py-1 text-[#f1f1f1] rounded-md mx-2 text-sm break-keep text-nowrap bg-[#272727]'>{category.snippet.title}</button>)
      }
       
  
    
    </div>
  )
}

export default Category