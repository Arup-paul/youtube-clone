import React, { useEffect } from 'react';
import './_watchScreen.scss'
import {Col, Row} from "react-bootstrap";
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import  { getVideoById } from '../../redux/actions/video.action'

function WatchScreen() {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))
    },[dispatch.id])

    const { video,loading } = useSelector(state => state.selectedVideo)

    return  <Row>
        <Col lg={8}>
             <div className="watchScreen__player">
                 <iframe
                     src={`https://www.youtube.com/embed/${id}`}
                     frameBorder="0"
                     title={video?.snippet?.title}
                     allowFullScreen
                     width='100%'
                     height='100%'
                 >
                 </iframe>
             </div>
            {
                !loading ? <VideoMetaData video={video} videoId={id} /> : <h6>loaiding</h6>
            }

            <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
        </Col>
        <Col lg={4}>
            {
                [...Array(20)].map(() => <VideoHorizontal /> )
            }
        </Col>
    </Row>
}

export default WatchScreen;