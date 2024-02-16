import React from 'react';
import classes from './MyButton.module.css' //импортируем объект

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
        {/*    импортированный стиль как свойство объекта*/}
        {/*/!*    {props.children}*!/ или*/}
            {children}
        {/*    передаёт содержание*/}
        </button>
    );
};

export default MyButton;