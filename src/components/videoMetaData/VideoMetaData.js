import React from 'react';
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
import './_videoMetaData.scss'
import ShowMoreText from 'react-show-more-text'
function VideoMetaData() {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                     <span>
                         {numeral(1000000).format("0.a")} Views •
                         {moment('2020-06-09').fromNow()}
                     </span>

                <div>
                    <span className="m-1">
                        <MdThumbUp size={26} /> {numeral(1000000).format("0.a")}
                    </span>
                    <span className="m-1">
                         <MdThumbDown size={26}  /> {numeral(1000000).format("0.a")}
                    </span>
                </div>
            </div>
            </div>
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-2">
                <div className="d-flex ">
                <img
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    alt=""
                    className="rounded-circle  "
                />
                <div className="d-flex flex-column m-1">
                    <span>Rio Online</span>
                    <span>{numeral(1000000).format("0.a")} Subscribers </span>
                </div>
                </div>
                <button className="btn border-0 p-2 m-2">
                    Subscribe
                </button>
            </div>
            <div className="videoMetaData__description">
               <ShowMoreText
                  lines={3}
                  more="SHOW MORE"
                  less="SHOW LESS"
                  anchorClass="showMoreText"
                  expanded={false}
               >
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </ShowMoreText>
            </div>
        </div>
    );
}

export default VideoMetaData;