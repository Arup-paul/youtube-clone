import React from 'react';
import {AiFillEye} from "react-icons/ai";
import './_video.scss'

function Video( ) {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFbVeOdpHjPmjEkLBCOpvPJC5eMg" alt=""/>
                <span>5:43</span>
            </div>
            <div className="video__title">
                Fully Functional YouTube Clone | React | Redux | Firebase | YouTube API
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5M Views •
                </span>
                <span>
                    5 days ago
                </span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwngXVUOK3DI8g8BHFPtX7Gei9nok-D7yPAkUAo33=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>Backbencer Coder</p>
            </div>
        </div>
    );
}

export default Video;
