import React, {useEffect, useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import {usePosts} from "./hooks/usePosts.js";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching.js";
import {getPageCount, getPagesArray} from "./utils/pages.js";
// import * as querystring from "querystring";

function App() {
    const [posts, setPosts] = useState([ //передаём массив объектов
    ])
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0); //щетчик стр
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // const sortedPosts = useMemo(() => {
    //     if(filter.sort){
    //         console.log('selectedSort')
    //         return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    //     }
    //     return posts;
    //
    // }, [filter.sort, posts])  //если зависимость поменяет значение вызывает колбек (сохранает сортированный чтоб оптимизировать)
    // const [isPostsLoading, setIsPostsLoading] = useState(false); //идёт загрузка
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data) //передаётм в posts
        const totalCount = response.headers['x-total-count']//общее кол во постов и стр
        setTotalPages(getPageCount(totalCount, limit))
    })
    //переписать далее с useMemo()
    let pagesArray = getPagesArray(totalPages)

    useEffect(() => { // колбек
        fetchPosts()
    }, [page]) //массив зависимостей,

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
        setModal(false)
    }

// async function fetchPosts() {
//         setIsPostsLoading(true);
        // setTimeout(async ()=>{
        //     const posts = await PostService.getAll();
        //     setPosts(posts) //передаётм в posts
        //     setIsPostsLoading(false);
        // }, 5000)
        // const posts = await PostService.getAll();
        //setPosts(posts) //передаётм в posts
        // setIsPostsLoading(false);
    // }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    //     setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort]))) //мутируем копию, сравниваем строки
    // }

    // const sortedAndSearchedPosts = useMemo(() => {
    //     return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query)) //ВНИМАНИЕ так делается поиск
    // }, [filter.query, sortedPosts])

    //код выше заменён хуком sortedAndSearchedPosts

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const changePage = (page) => {
        setPage(page)
        // fetchPosts() //в нём указана зависимость от page
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

        {/*<Postlist posts={posts} title='title TEST 1'/>*/}
        {/*<Postlist posts={posts2} title='title TEST 2'/>*/}


        <hr style={{margin: '15px 0'}}/>

        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {/*проверка на ошибку*/}
        {postError &&
            <h1>ERROR! ${postError}</h1>}

        {isPostsLoading
            ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'} }><Loader/></div>
            :  <Postlist remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
        }




        {/*<Postlist remove={removePost} posts={posts}/>*/}

        {/*берём массив posts, через мап обращаемся к каждому элементу и перобразуем в реакт элемент*/}
        {/*{posts.map(post =>*/}
        {/*    // обязательно указать key - уникальный статичный ключ*/}
        {/*    <PostItem post={post} key={post.id}/>*/}
        {/*)}*/}


        {/*<PostItem post={{id: 1, title: 'JS (from props)', body: 'description (from props.post.body)'}}/>*/}
    {/*   пропс выше можно использовать в самом PostItem (он как бы и так внутри) */}

        <div className='page-wrapper'>
            {pagesArray.map(p =>
                    // проверка если элемент итерации map =
                    <span
                        onClick={() => changePage(p)}
                        key={p} className={page === p ? 'page page_current' : 'page'}>
                        {p}</span>
            )}
        </div>

    </div>

  );
}

export default App;
