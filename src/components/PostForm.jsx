import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const [myPostNumber, setMyPostNumber] = useState(1)


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: 'my_post №' + myPostNumber
        }
        create(newPost)
        setPost({title: '', body: ''})
        setMyPostNumber(myPostNumber + 1)
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
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}//перетираем только нужное
                    type='text'
                    placeholder='discr'/>
                <MyButton onClick={addNewPost}>OK</MyButton>
            </form>
        </div>
    );
};

export default PostForm;