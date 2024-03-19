import React, {useEffect, useState} from 'react';
import '../styles/app.css'
import Postlist from "../components/Postlist";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter.jsx";
import MyModal from "../components/UI/MyModal/MyModal.jsx";
import {usePosts} from "../hooks/usePosts.js";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching.js";
import {getPageCount} from "../utils/pages.js";
import Pagination from "../components/UI/pagimation/Pagination.jsx";

function Posts() {
    const [posts, setPosts] = useState([
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0); //щетчик стр
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data) //передаётм в posts
        const totalCount = response.headers['x-total-count']//общее кол во постов и стр
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => { // колбек
        fetchPosts()
    }, [page]) //массив зависимостей,

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
            <MyButton style={{marginTop: '2rem'}} onClick={() => setModal(true)}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>ERROR! ${postError}</h1>}

            {isPostsLoading
                ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'} }><Loader/></div>
                :  <Postlist remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}
export default Posts;