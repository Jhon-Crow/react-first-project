import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.css'
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
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0); //щетчик стр
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]) //передаётм в posts
        // развернули страые и новые стр в новый массив
    const totalCount = response.headers['x-total-count']//общее кол во постов и стр
        setTotalPages(getPageCount(totalCount, limit))
    })
    const lastElement = useRef() //получаем посл элем



    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => { // колбек
        fetchPosts(limit, page)
    }, [page, limit]) //массив зависимостей,

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



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
            <MySelect value={limit}
            onChange={value => setLimit(value)}
                      defaultValue='Max num of elems on page'
                      option={[
                          {value: 5, name: '5'},
                          {value: 10, name: '10'},
                          {value: 25, name: '25'},
                          {value: -1, name: 'Show All'},
                      ]}
            />
            {postError &&
                <h1>ERROR! ${postError}</h1>}
            <Postlist remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            <div ref={lastElement} style={{height: 20}}></div>
            {isPostsLoading &&
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'} }><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages} />
        </div>
    );
}
export default Posts;