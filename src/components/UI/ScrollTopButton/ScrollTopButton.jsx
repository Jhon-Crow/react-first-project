import React from 'react';
import MyButton from "../button/MyButton";
import classes from './ScrollTopButton.module.css'

const ScrollTopButton = ({className}) => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    }

    return (
        <div
            className={classes.ScrollTopButton}
            >
            <MyButton
                onClick={scrollTop}
            >^</MyButton>
        </div>

    );
};

export default ScrollTopButton;