import axios from 'axios';


const request  = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCBvWudsC9Zyew8vmblyJUUphS1h3AEnB0"
    }
})

export default request;

