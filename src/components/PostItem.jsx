import React from 'react';

const PostItem = () => {
    return (
        <div className='post'>
            <div className="post__content">
                <strong>1. JS</strong>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, sit.
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;