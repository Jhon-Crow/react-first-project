import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostsById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });


    useEffect(() => {
        if (params.id) {
            fetchPostsById(params.id);
        }
    }, []);

    return (
        <div>
            {isLoading
                ? <Loader />
                : <h1>{post.id}. {post.title}</h1>
            }
            <h1>
                Comments
            </h1>
        </div>
    );
};

export default PostIdPage;
