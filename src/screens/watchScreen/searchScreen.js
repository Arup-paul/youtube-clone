import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getVideosBySearch } from '../../redux/actions/video.action'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
function SearchScreen() {

    const { query } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])

    const { videos, loading } = useSelector(state => state.searchedVideos);
    return (
        <Container>
            {
                !loading ? (
                    videos?.map(video => <VideoHorizontal video={video} key={video.id.videoId} searchScreen />)
                ):(
                    <SkeletonTheme color="#343e40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="160px" count={8} />
                    </SkeletonTheme>
                )
            }
        </Container>
    );
}

export default SearchScreen;