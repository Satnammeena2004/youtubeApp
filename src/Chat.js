import Logo from './logo.png'
import { memo } from 'react'

const Chat = memo(function Chat({author,message}){

    return (
        <div className='flex items-center px-2 my-1 w-80 shadow-lg border-t-2 rounded-md border-green-400 bg-slate-50 '>
            <span className="w-8 h-8 rounded-full  inline-block m-2 "><img src={Logo } alt="react" /></span>
            <span className='mx-2 font-bold'>{author}</span>
            <span className='font-light text-sm'>{message}</span>
        </div>
    )
})


export default Chat;