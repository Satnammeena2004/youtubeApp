import React, { useEffect, useState } from 'react'
import { VIDEO_CATEGORY_API_URL, YOUTUBE_API_KEY } from './constant';

// const category = ["Music","Cricket","Comedy","Movie","Secns","Satnd up","Video","Trendig","Cricket","Cricket","Cricket"]



function Category() {
const [category,setCategory] = useState([])


 function handleCLick(){
  console.log("CLicked");
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
    <div className='p-2 flex overflow-x-scroll no-scrollbar w-[70rem] bg-[#0f0f0f] fixed  z-[2] '>
      <button onClick={(e)=>{
        e.target.parentElement.scrollBy({
          top:0,
          left:100,
          behavior:"smooth"
        })
      }} className='fixed right-4'>➡️</button>
      {
        category.map((category)=><button key={category.id} onClick={handleCLick} className='px-2 py-1 text-[#f1f1f1] rounded-md mx-2 text-sm break-keep text-nowrap bg-[#272727]'>{category.snippet.title}</button>)
      }
       
  
    
    </div>
  )
}

export default Category