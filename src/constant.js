export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_API_URL = process.env.REACT_APP_YOUTUBE_API_URL
export const VIDEO_CATEGORY_API_URL = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key="

export function condtionalURL(conditionalStr){
    return "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&"+conditionalStr
}