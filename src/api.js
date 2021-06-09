import axios from 'axios';


const request  = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyBIJS_Ht-uB2BN75XdrgfLKvfxmA-GcdT4"
    }
})

export default request;

