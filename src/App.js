import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([ //передаём массив объектов
        {id: 1, title: 'JS (from props)', body: 'description (from props.post.body)'},
        {id: 2, title: 'TESTeY)', body: 'description (from props.post.body)'},
        {id: 3, title: 'STeY', body: 'description (from props.post.body)'},
        {id: 4, title: 'TEST', body: 'lorem10'},
        {id: 5, title: 'testingg', body: 'description (from props.post.body)'}
    ])

    const [posts2, setPosts2] = useState([ //передаём массив объектов
        {id: 1, title: '2', body: 'descr22ion (from props.post.body)'},
        {id: 2, title: '222', body: 'description (from props.post.body)'},
        {id: 4, title: '22222', body: 'lorem22'},
        {id: 5, title: '2222222222', body: '2222 (from props.post.body)'}
    ])


    // const [likes, setLikes] = useState(5);
    // const [value, setValue] = useState('inp txt ') //значение, передать новое значение

    // function increment() {
    //    setLikes(likes + 1)
    // }
    //
    // function decrement() {
    //     setLikes(likes - 1)
    // }

  return (
    <div className="App">
        <form>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='discr'/>
            <MyButton>OK</MyButton>
        </form>




        {/*<Postlist posts={posts} title='title TEST 1'/>*/}
        {/*<Postlist posts={posts2} title='title TEST 2'/>*/}



        {/*<h1 style={{textAlign: "center"}}>*/}
        {/*    Список постов*/}
        {/*</h1>*/}
        {/*/!*берём массив posts, через мап обращаемся к каждому элементу и перобразуем в реакт элемент*!/*/}
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
