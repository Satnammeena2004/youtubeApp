import React from 'react'
//className="p-2 rounded-lg *:text-sm flex flex-col m-2 min-h-80 text-[#f1f1f1] hover:scale-105 transition-transform"
export function Shimmer() {
    return (
        <div className='flex flex-col h-72 gap-y-3  animate-pulse mt-8 p-2 m-2'>
            <div className=' bg-gray-500/20 rounded-lg h-4/5'></div>
            <div className='flex gap-1'>
                <div>
                    <div className='w-10 h-10 rounded-full bg-gray-500/20'>

                    </div>
                </div>
                <div className='w-full'>
                    <p className='bg-gray-500/20 p-2 rounded-full my-2'></p>
                    <p className='bg-gray-500/20 p-2 rounded-full w-3/5'></p>
                </div>
            </div>

        </div>
    )
}

export function Shimmers({count}){

    return Array(count).fill("shimmer").map((e,i)=>{
         return <Shimmer/>
    })
}



function ShimmerList({ count }) {

    return (
        <div className='grid grid-cols-3 w-full gap-8 p-2 bg-[#0f0f0f]'>
            {Array(count).fill(1).map((e) => {
                return <Shimmer key={e} />
            })}
        </div>
    )
}

export default ShimmerList