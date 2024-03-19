import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    // при изменении значение цели передаётся в состояние title
                    type='text'
                    placeholder='Name'/>
                {/*/!*<input ref={bodyInputRef} type='text'/>*!/ неуправляемый*/}
                <MyInput
                    value={post.body}
                    // onChange={e => setBody(e.target.value)}
                    onChange={e => setPost({...post, body: e.target.value})}//перетираем только нужное
                    type='text'
                    placeholder='discr'/>
                <MyButton onClick={addNewPost}>OK</MyButton>
            </form>
        </div>
    );
};

export default PostForm;