export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
export const YOUTUBE_API_URL = process.env.REACT_APP_YOUTUBE_API_URL
export const VIDEO_CATEGORY_API_URL = process.env.REACT_APP_YOUTUBE_CATEGORY_API_URL

export const YOUTUBE_API_BASE_URL = process.env.REACT_APP_YOUTUBE_API_BASE_URL

export function condtionalURL(conditionalStr) {
    return YOUTUBE_API_BASE_URL + "videos?part=snippet%2CcontentDetails%2Cstatistics&"
        + conditionalStr
}


export function formatNumber(num) {
    const formatter = new Intl.NumberFormat('en', { notation: 'compact', compactDisplay: 'short' });
    return formatter.format(num);
}

export function timeAgo(date) {
    const now = Date.now();
    const secondsPast = Math.floor((now - new Date(date).getTime()) / 1000);

    const times = [
        { unit: 'year', value: 31536000 },
        { unit: 'month', value: 2592000 },
        { unit: 'week', value: 604800 },
        { unit: 'day', value: 86400 },
        { unit: 'hour', value: 3600 },
        { unit: 'minute', value: 60 },
        { unit: 'second', value: 1 }
    ];

    for (let i = 0; i < times.length; i++) {
        const interval = Math.floor(secondsPast / times[i].value);
        if (interval >= 1) {
            return `${interval} ${times[i].unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}