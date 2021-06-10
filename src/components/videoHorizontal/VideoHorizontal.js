import React, {useEffect, useState} from 'react';
import './_videoHorizontal.scss'
import request from '../../api'
import { useHistory } from 'react-router-dom'
import {Col, Row} from "react-bootstrap";
import moment from 'moment'
import numeral from 'numeral'
import {AiFillEye} from "react-icons/ai";

import { LazyLoadImage } from 'react-lazy-load-image-component';
function VideoHorizontal({video}) {

    const {
        id,
        snippet:{
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails:{medium}
        },
    } = video

    const [views,setViews] = useState(null);
    const [duration,setDuration] = useState(null);
    const [channelIcon,setChannelIcon] = useState(null);

    useEffect(() => {
        const get_video_details = async() => {
            const {data:{items}} =  await request('/videos',{
                params: {
                    part:'contentDetails,statistics',
                    id:id.videoId
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    },[id])

    useEffect(() => {
        const get_channel_icon = async() => {
            const {data:{items}} =  await request('/channels',{
                params: {
                    part:'snippet',
                    id:channelId
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

    const history = useHistory()
    const handleClick = () => {
          history.push(`/watch/${id.videoId}`)
    }


    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center" onClick={handleClick}>
         <Col xs={6} md={6} className="videoHorizontal__left">
             <LazyLoadImage
                 src={medium.url}
                 effect="blur"
                 className="videoHorizontal__thumbnail"
                 wrapperClassName="videoHorizontal_thumbnail-wrapper"
             />
             <span className="videoHorizontal__duration">{_duration}</span>

         </Col>
          <Col xs={6} md={6} className="videoHorizontal__right p-0">
                <p className="videoHorizonta__title mb-1">
                    {title}
                </p>
                <div className="videoHorizontal__details">
                    <AiFillEye /> {numeral(views).format("0.a")} Views •
                    {moment(publishedAt).fromNow()}
                </div>
              <div className="videoHorizontal__channel d-flex align-items-center my-1">
                  {/*<LazyLoadImage*/}
                  {/*    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"*/}
                  {/*    effect="blur"*/}
                  {/* />*/}
                  <p className="mb-0">{channelTitle}</p>
              </div>
            </Col>
        </Row>
    );
}

export default VideoHorizontal;