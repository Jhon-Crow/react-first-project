import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommLoading, commError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });


    useEffect(() => {
            fetchPostsById(params.id);
            fetchComments(params.id)
    }, []);

    return (
        <div>
            {isLoading
                ? <Loader/>
                : <h1>{post.id}. {post.title}</h1>
            }
            <h1>
                Comments
            </h1>
            {isCommLoading
            ? <Loader/>
            : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: '20px'}}>
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>

                        </div>)}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
