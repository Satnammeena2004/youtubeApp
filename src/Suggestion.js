import {memo} from "react";
// import {YOUTUBE_API_KEY} from "./constant";


const suggestions = ["react", "i phone","i phone 12", "i phone 13", "i phone 14", "i phone", "i phone","Viovo","Oppo","Hp"];


const Suggestion = memo(function Suggestion({visibility, query}) {
  // const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   async function getSuggestions() {
  //     try{

  //       const res2 = await fetch(
  //         ` https://youtube.googleapis.com/youtube/v3/search?${query}=&key=`+YOUTUBE_API_KEY
  //         );
  //         const json2 = await res2.json();
  //         // setSuggestions(json2.items.map((item) => item?.snippet?.channelTitle));
  //       }catch(err){
  //         console.log(err)
  //       }
  //   }

  //   const timer = setTimeout(() => {
  //     getSuggestions();
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [query]);




  if (suggestions.length === 0) {
    return <h1>No suggestion</h1>;
  }

  return (
    <>
      {visibility && (
        <div
          id="scrollbar"
          className="w-1/3 bg-gray-200 p-1 rounded-sm absolute top-14 *:text-sm *:text-slate-700 scrollbar h-60 overflow-y-scroll z-10	"
        >
          <div className="flex flex-col">
            {suggestions.map((suggestion, i) => (
              <button
                key={i}
                value={suggestion}
                id="suggestion"
                className="p-1 hover:bg-gray-300 border-b-gray-300 border-b-2 text-left suggestion"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

export default Suggestion;