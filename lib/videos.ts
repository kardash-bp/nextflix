import videoData from '../data/videos.json';
import { YT_API } from '../config';
export const getVideos = async (term = 'travel') => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&maxResults=10&q=${term}&key=${YT_API}`, {
    method: 'GET'
  })

  try {
    const videoData = await res.json() as any
    if (videoData?.error) {
      console.error('YouTube API error ', videoData.error)
      return []
    }
    return videoData?.items.map((v: any, i: any) => (
      { id: v.id.videoId ? v.id.videoId : i, title: v.snippet.title, imgUrl: v.snippet.thumbnails.high.url }
    ))
  } catch (err: any) {
    console.error('Something went wrong: ', err.message)
    return []
  }

}
export const getPopularVideos = async () => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=RS&key=${YT_API}`, {
    method: 'GET'
  })

  try {
    const videoData = await res.json() as any
    if (videoData?.error) {
      console.error('YouTube API error ', videoData.error)
      return []
    }
    return videoData?.items.map((v: any, i: any) => (
      { id: v.id.videoId ? v.id.videoId : i, title: v.snippet.title, imgUrl: v.snippet.thumbnails.high.url }
    ))
  } catch (err: any) {
    console.error('Something went wrong: ', err.message)
    return []
  }

}