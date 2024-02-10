import React, {useEffect, useState} from "react";
import Suggestion from "./Suggestion";
import {useNavigate} from "react-router-dom";

function Header() {
  const [suggestionVisible, setSuggestionVisible] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const [debounce,setDebounce] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("API CALL HERE", query);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  function handleSubmission(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    navigate("/search?q=" + formData.get("search"));
  }

  return (
    <div className="flex justify-between  border-2 shadow-md mb-2 p-2">
      <div className="flex gap-2">
        <span>📔</span>
        <img alt="Youtbde logo" src="" />
      </div>
      <div className="w-2/4 ">
        <form onSubmit={handleSubmission}>
          <input
            autoComplete="off"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="serach"
            onBlur={(e) => {
              if (e.relatedTarget?.id === "suggestion") {
                setQuery(e?.relatedTarget?.value);
                setSuggestionVisible(false);
                navigate("/search?q="+e?.relatedTarget?.value)
              } else {
                setSuggestionVisible(false);
              }
            }}
            onFocus={(e) => {
              setSuggestionVisible(true);
            }}
            className="peer p-2 outline-1 outline-zinc-300 placeholder:text-sm text-slate-500 border-gray-300 border rounded-sm w-2/3 rounded-l-full   "
          />
          <button
            type="submit"
            className="p-2 border  outline-lime-100 rounded-r-full"
          >
            🔍
          </button>
        </form>
        <Suggestion
          visibility={suggestionVisible}
          setQuery={setQuery}
          query={query}
        />
      </div>
      <div className="">➕</div>
    </div>
  );
}

export default Header;
