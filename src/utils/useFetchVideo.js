import {useEffect, useState} from "react";
import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from "../constant";

const useFetchVideos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(YOUTUBE_API_URL + YOUTUBE_API_KEY);
      const json = await res.json();
    //   setData(json);
    }
    getData()
  }, []);

  return data;
};

export default useFetchVideos;
