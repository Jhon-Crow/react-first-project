import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Postlist = ({posts, title, remove}) => {

    if(!posts.length){
        return <h1 style={{textAlign: 'center'}}>
            No posts found
        </h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>

            {/*делаем анимацию с помощью транзшн*/}
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    {/*// обязательно указать key - уникальный статичный ключ*/}
                    <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                        )}
            </TransitionGroup>

            {/*берём массив posts, через мап обращаемся к каждому элементу и перобразуем в реакт элемент*/}

        </div>
    );
};

export default Postlist;