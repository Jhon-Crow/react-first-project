import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([ //передаём массив объектов

    ])

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">





        {/*<Postlist posts={posts} title='title TEST 1'/>*/}
        {/*<Postlist posts={posts2} title='title TEST 2'/>*/}


        <PostForm create={createPost}/>
        <h1 style={{textAlign: "center"}}>
            Список постов
        </h1>

        <Postlist remove={removePost} posts={posts}/>

        {/*берём массив posts, через мап обращаемся к каждому элементу и перобразуем в реакт элемент*/}
        {/*{posts.map(post =>*/}
        {/*    // обязательно указать key - уникальный статичный ключ*/}
        {/*    <PostItem post={post} key={post.id}/>*/}
        {/*)}*/}


        {/*<PostItem post={{id: 1, title: 'JS (from props)', body: 'description (from props.post.body)'}}/>*/}
    {/*   пропс выше можно использовать в самом PostItem (он как бы и так внутри) */}

    </div>

  );
}

export default App;
