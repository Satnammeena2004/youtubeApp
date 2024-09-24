import { useEffect, useState } from "react";
import { VIDEO_CATEGORY_API_URL, YOUTUBE_API_KEY } from "../../constant";



const useCategory = () => {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getCategories() {
            const data = await fetch(VIDEO_CATEGORY_API_URL + YOUTUBE_API_KEY);
            if (!data.ok) {
                setError(true)
                setIsLoading(false);
                return;
            }
            const json = await data.json();
            setCategory(json.items);
            setIsLoading(false)
            setError(false)
        }
        getCategories().catch((err) => {
            setError(true)
        })
    }, [])

    return [category, isLoading, error]
}


export default useCategory;