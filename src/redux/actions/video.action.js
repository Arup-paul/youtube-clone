import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  RELATED_VIDEOS_FAIL,
  SEARCH_VIDEOS_REQUEST,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_FAIL,
  SUBSCRIPTION_CHANNEL_REQUEST,
  SUBSCRIPTION_CHANNEL_SUCCESS,
  SUBSCRIPTION_CHANNEL_FAIL,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_SUCCESS,
  CHANNEL_VIDEOS_FAIL
} from '../actionType'
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
        maxResults:8,
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
        maxResults:8,
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


export const getVideoById = (id) => async dispatch => {
   try{
     dispatch({
       type:SELECTED_VIDEO_REQUEST
     })

     const { data }  = await request('/videos',{
       params: {
         part:'snippet,statistics',
         id:id,
       },
     })

     dispatch({
       type:SELECTED_VIDEO_SUCCESS,
       payload:data.items[0]
     })
   }catch(error) {
     console.log(error.message)
     dispatch({
       type: SELECTED_VIDEO_FAIL,
       payload:error.message
     })
   }
}

export const getRelatedVideos = (id) => async dispatch => {
  try{
    dispatch({
      type:RELATED_VIDEOS_REQUEST
    })

    const { data }  = await request('/search',{
      params: {
        part:'snippet',
        relatedToVideoId:id,
        maxResults:15,
        type:'video'
      },
    })

    dispatch({
      type:RELATED_VIDEOS_SUCCESS,
      payload:data.items
    })
  }catch(error) {
    console.log(error.response.data.message)
    dispatch({
      type: RELATED_VIDEOS_FAIL,
      payload:error.response.data.message
    })
  }
}



export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {

    dispatch({
      type:SEARCH_VIDEOS_REQUEST
    })
    const { data } = await request('/search',{
      params:{
        part:"snippet",
        maxResults:8,
        q:keyword,
        type:'video,channel'
      }
    })


    dispatch({
      type:SEARCH_VIDEOS_SUCCESS,
      payload: data.items,
    })
  }
  catch (error){
    console.log(error.message)
    dispatch({
      type:SEARCH_VIDEOS_FAIL,
      payload:error.message
    })
  }
}


export const getSubscriptionChannel = () => async (dispatch,getState) => {
  try{

    dispatch({
       type:SUBSCRIPTION_CHANNEL_REQUEST
    })

    const { data }  = await request('/subscriptions',{
      params: {
        part:'snippet,contentDetails',
        mine:true
      },
      headers:{
        Authorization:`Bearer ${getState().auth.accessToken}`,
      }
    })

    dispatch({
      type:SUBSCRIPTION_CHANNEL_SUCCESS,
      payload:data.items
    })
  }catch(error) {
    dispatch({
      type:SUBSCRIPTION_CHANNEL_FAIL,
      payload:error.response.data
    })

  }
}



export const getVideosByChannel = (id) => async (dispatch) => {
  try{

    dispatch({
      type:CHANNEL_VIDEOS_REQUEST
    })


    const { data:{items} }  = await request('/channels',{
      params: {
        part:'contentDetails',
        id:id
      },
    })

    const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads


    const {
      data
    } =  await request('/playlistItems',{
       params: {
         part:'snippet,contentDetails',
         playlistId:uploadPlaylistId,
         maxResults:20
       }
    })

    dispatch({
      type:CHANNEL_VIDEOS_SUCCESS,
      payload:data.items
    })
  }catch(error) {
    dispatch({
      type:CHANNEL_VIDEOS_FAIL,
      payload:error.response.data
    })

  }
}

