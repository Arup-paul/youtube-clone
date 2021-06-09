import React from 'react';
import './_comments.scss'
import Comment from '../comment/Comment'
function Comments( ) {
    const handleComment = () => {
        
    }

    return (
        <div className="comments">
             <p>1234</p>
            <dib className="comments__form d_flex w-100 my-2">
                <div className="d-flex">
                <img
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    alt=""
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1 m-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="write a comment...."
                    />
                    <button className="border-0 p-2">
                        Comment
                    </button>
                </form>
                </div>
            </dib>
            <div className="comment__list">
                {
                    [...Array(15)].map(() => (
                        <Comment />
                    ))
                }
            </div>
        </div>
    );
}

export default Comments;