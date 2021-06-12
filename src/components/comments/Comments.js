import React, { useEffect,useState } from 'react';
import './_comments.scss'
import { useDispatch,useSelector } from 'react-redux'
import { getCommentsById,addComment } from '../../redux/actions/comments.action'
import Comment from '../comment/Comment'
function Comments({ videoId,totalComments }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsById(videoId))
        console.log(comments)
    },[videoId,dispatch])

    const comments  = useSelector(state => state.commentList.comments)
    const  user  = useSelector(state=>state.auth?.user)


    const [text,setText] = useState("");

     const _comments = Object.values(comments)?.map(
        comment => comment.snippet.topLevelComment.snippet
    )
    const handleComment = (e) => {
         e.preventDefault();
         if(text.length ===0) return;
         dispatch(addComment(videoId,text))
        setText('')
    }

    return (
        <div className="comments">
             <p>{totalComments} Comments</p>
            <dib className="comments__form d_flex w-100 my-2">
                <div className="d-flex">
                <img
                    src={user?.photoURL}
                    alt="avatar"
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1 m-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="write a comment...."
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                    <button className="border-0 p-2">
                        Comment
                    </button>
                </form>
                </div>
            </dib>
            <div className="comment__list">
                {

                    _comments?.map((comment,i) => (
                        <Comment comment={comment} key={i}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Comments;