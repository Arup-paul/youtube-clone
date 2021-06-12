import React, {useEffect} from 'react';
import './_subscriptionScreen.scss'
import {Container} from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getSubscriptionChannel } from '../../redux/actions/video.action'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'

function SubscriptionScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscriptionChannel())
    }, [dispatch])

    const {loading,videos} = useSelector(state=>state.subscriptionChannel)

    return (
         <Container fluid>
             {
                 !loading
                     ? videos?.map(video=>
                         <VideoHorizontal video={video} key={video.id} subScreen />
                     ):
                     (
                         <SkeletonTheme color="#343e40" highlightColor="#3c4147">
                             <Skeleton width="100%" height="160px" count={8} />
                         </SkeletonTheme>
                     )
             }
         </Container>
    );
}

export default SubscriptionScreen;