import React from 'react'

function Shimmer() {
    return (
        <div className='flex flex-col h-72 gap-y-3  animate-pulse'>
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