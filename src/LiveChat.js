import Chat from "./Chat";
import {useSelector, useDispatch} from "react-redux";
import {addChat} from "./utils/liveChat";
import {useEffect, useMemo, useRef, useState} from "react";

const emojis = [
  "🍇",
  "👀",
  "👄",
  "👨🏻",
  "🧑🏻‍🦱",
  "🫅🏻",
  "👷🏻‍♂️",
  "🍟",
  "🥙",
  "🥫",
  "🥡",
  "🍜",
  "🧡",
  "❤️‍🩹",
  "❤️‍🔥",
  "💔",
  "💢",
  "💤",
  "💨",
  "♐",
  "🕉️",
];

function getRandomNumber(value) {
  return Math.floor(Math.random() * value);
}

function LiveChat() {
  const [chatMessage, setChatMessage] = useState("");
  const liveChat = useSelector((store) => store.chat.chats);
  const dispatch = useDispatch();

const handleClick = useMemo(()=>function handleClick(e) {
    e.preventDefault();
    dispatch(
      addChat({
        author: "Satnam" + emojis[getRandomNumber(20)],
        message: chatMessage,
      })
    );
    setChatMessage("");
  },[chatMessage,dispatch])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       dispatch(
//         addChat({
//           author:
//             crypto.randomUUID().substring(0, 5) + emojis[getRandomNumber(20)],
//           message: crypto.randomUUID().toString().substring(0, 10)
//         })
//       );
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [handleClick,dispatch]);

  return (
    <div className="bg-[#0f0f0f]">
      <h1 className="p-1 text-center font-bold text-2xl ">LiveChat</h1>
      <div  className="h-80 my-2  flex flex-col-reverse p-2  overflow-y-scroll ">
        {liveChat.map((chat, i) => (
          <>
          <Chat key={i} author={chat.author} message={chat.message} />
          </>
          
        ))}
        
      </div>
      <form onSubmit={handleClick}>
        <input
          placeholder="Start chating.."
          className="p-1 rounded-l-full placeholder:text-sm border-2 outline-none rounded-md border-green-300"
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button
          className="bg-green-300 p-2 rounded-md rounded-r-full border-none"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
