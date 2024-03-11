import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([ //передаём массив объектов

    ])


    const [selectedSort, setSelectedSort] = useState('')

    function getSortedPosts(selectedSort){
        if(selectedSort){
            console.log('selectedSort')
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort()]))
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()
    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort]))) //мутируем копию, сравниваем строки
    }

    const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="App">

        {/*<Postlist posts={posts} title='title TEST 1'/>*/}
        {/*<Postlist posts={posts2} title='title TEST 2'/>*/}


        <PostForm create={createPost}/>

        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={'Search'}
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
            defaultValue='Sort by...'
            option={[
                {value:'title', name: 'By name'},
                {value:'body', name: 'By discription'}
            ]}
            />
            {/*<select>*/}
            {/*    <option value={'value1'}>По описанию</option>*/}
            {/*    <option value={'value2'}>По названию</option>*/}
            {/*</select>*/}
        </div>

        {posts.length
            ? <Postlist remove={removePost} posts={sortedPosts} title={'Список постов'}/>
            : <h1 style={{textAlign: 'center'}}>
                Posts not finde
        </h1>
        }
        {/*<Postlist remove={removePost} posts={posts}/>*/}

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
