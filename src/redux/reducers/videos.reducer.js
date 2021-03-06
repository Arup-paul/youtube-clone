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
export const homeVideoReducer = (state = {
    videos: [],
    loading:false,
    nextPageToken:null,
    activeCategory:'All'

},
        action
) => {

    const {type,payload} = action

    switch(type){
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:
                  state.activeCategory === payload.category
                        ?[...state.videos,...payload.videos]
                        :payload.videos,
                loading:false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category
            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            }
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}

export const selectedVideoReducer = (
    state = {
        loading:true,
        video:null
    },
       action
) => {
    const { payload,type } = action

    switch(type){

        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video:payload,
                loading:false
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state,
                video:null,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}


export const relatedVideosReducer = (
    state = {
        loading:true,
        videos:[]
    },
    action
) => {
    const { payload,type } = action

    switch(type){

        case RELATED_VIDEOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case RELATED_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:payload,
                loading:false
            }
        case RELATED_VIDEOS_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}


export const searchedVideosReducer = (
    state = {
        loading:true,
        videos:[]
    },
    action
) => {
    const { payload,type } = action

    switch(type){

        case SEARCH_VIDEOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:payload,
                loading:false
            }
        case SEARCH_VIDEOS_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}


export const subscriptionChannelReducer = (
    state = {
        loading:true,
        videos:[]
    },
    action
) => {
    const { payload,type } = action

    switch(type){

        case SUBSCRIPTION_CHANNEL_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SUBSCRIPTION_CHANNEL_SUCCESS:
            return {
                ...state,
                videos:payload,
                loading:false
            }
        case SUBSCRIPTION_CHANNEL_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}

export const channelVideosReducer = (
    state = {
        loading:true,
        videos:[]
    },
    action
) => {
    const { payload,type } = action

    switch(type){

        case CHANNEL_VIDEOS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case CHANNEL_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:payload,
                loading:false
            }
        case CHANNEL_VIDEOS_FAIL:
            return {
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}


