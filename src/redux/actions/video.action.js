import { HOME_VIDEOS_REQUEST,HOME_VIDEOS_SUCCESS,HOME_VIDEOS_FAIL} from '../actionType'
import request from '../../api'

export const getPopularVideos = () => async (dispatch,getState) => {
  try {

    dispatch({
         type:HOME_VIDEOS_REQUEST
    })
    const { data } = await request('/videos',{
      params:{
        part:"snippet,contentDetails,statistics",
        chart:"mostPopular",
        regionCOde:"BD",
        maxResults:20,
        pageToken:'',
      }
    })


    dispatch({
      type:HOME_VIDEOS_SUCCESS,
      payload:{
          videos: data.items,
          pageToken:getState().homeVideos.nextPageToken,
          category:'All'

      }
    })
  }
    catch (error){
      console.log(error.message)
      dispatch({
        type:HOME_VIDEOS_FAIL,
        payload:error.message
      })
    }
}

export const getVideosByCategory = (keyword) => async (dispatch,getState) => {
  try {

    dispatch({
      type:HOME_VIDEOS_REQUEST
    })
    const { data } = await request('/search',{
      params:{
        part:"snippet",
        maxResults:20,
        pageToken:getState().homeVideos.nextPageToken,
        q:keyword,
        type:'video'
      }
    })


    dispatch({
      type:HOME_VIDEOS_SUCCESS,
      payload:{
        videos: data.items,
        nextPageToken:data.nextPageToken,
        category:keyword

      }
    })
  }
  catch (error){
    console.log(error.message)
    dispatch({
      type:HOME_VIDEOS_FAIL,
      payload:error.message
    })
  }
}