import React, { useEffect } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Video from "../../components/video/video";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";
import { useDispatch,useSelector } from 'react-redux'
import  { getPopularVideos,getVideosByCategory } from '../../redux/actions/video.action'
import SkeletonVideo from '../../components/skeletons/skeletonVideo';
import InfiniteScroll from 'react-infinite-scroll-component'

function HomeScreen( ) {

    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(getPopularVideos())
    },[dispatch])

    const { videos,activeCategory,loading } =  useSelector(state => state.homeVideos)

    const fetchData = () => {
        if(activeCategory === 'All'){
            dispatch(getPopularVideos())
        }else{
            dispatch(getVideosByCategory(activeCategory))
        }


    }

    return (
        <div>
            <Container>
                <CategoriesBar />
                   <InfiniteScroll
                     dataLength={videos.length}
                     next={fetchData}
                     hasMore={true}
                     loader={
                         <div className="spinner-border text-danger d-block mx-auto "></div>
                     }
                     className="row"
                   >
                   { !loading ? videos.map(video => (
                               <Col lg={3} md={4}>
                                <Video video={video} key={video.id} />
                              </Col>
                           ))
                       :
                         [...Array(20)].map(() =>
                             <Col lg={3} md={4}>
                                 <SkeletonVideo />
                             </Col>
                         )
                   }
                   </InfiniteScroll>
            </Container>
        </div>
    );
}

export default HomeScreen;