import React from 'react';
import PostItem from "./PostItem";

const Postlist = ({posts, title, remove}) => {

    if(!posts.length){
        return <h1 style={{textAlign: 'center'}}>
            Posts not finde
        </h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {/*берём массив posts, через мап обращаемся к каждому элементу и перобразуем в реакт элемент*/}
            {posts.map((post, index) =>
                // обязательно указать key - уникальный статичный ключ
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default Postlist;