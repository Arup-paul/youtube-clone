import React from 'react';
import './_watchScreen.scss'
import {Col, Row} from "react-bootstrap";
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
function WatchScreen(props) {
    return  <Row>
        <Col lg={8}>
             <div className="watchScreen__player">
                 <iframe
                     src="https://www.youtube.com/embed/tgbNymZ7vqY"
                     frameBorder="0"
                     title="My Video"
                     allowFullScreen
                     width='100%'
                     height='100%'
                 >
                 </iframe>
             </div>
            <VideoMetaData />
            <Comments />
        </Col>
        <Col lg={4}>
            {
                [...Array(20)].map(() => <VideoHorizontal /> )
            }
        </Col>
    </Row>
}

export default WatchScreen;