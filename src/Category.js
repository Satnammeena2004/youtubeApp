import React from 'react'

const category = ["Music","Cricket","Comedy","Movie","Secns","Satnd up","Video","Trendig","Cricket","Cricket","Cricket"]



function Category() {

 function handleCLick(){
  console.log("CLicked");
 }
  

  return (
    // <div>Category</div>
    <div className='p-2'>
      {
        category.map((category,i)=><button key={i} onClick={handleCLick} className='p-1 bg-gray-300 rounded-sm mx-2 text-sm'>{category}</button>)
      }
       
  
    
    </div>
  )
}

export default Category