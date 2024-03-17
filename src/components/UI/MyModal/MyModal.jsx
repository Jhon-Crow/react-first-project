import React from 'react';
import cl from './MyModal.module.css'
import {CSSTransition} from "react-transition-group";


const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.myModal]
    if(visible){
        rootClasses.push(cl.active) //добавляем актив в массив классов
    }
    return (
        // <CSSTransition
        //     in={true} // Замените на состояние видимости модального окна
        //     timeout={500} // Время анимации в миллисекундах
        //     classNames="modal" // Названия классов для анимации
        // >
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {/*остановили всплытие чтоб срабатывало только при нажатии на бекграунд*/}
                {children}
            </div>
        </div>
        // </CSSTransition>
    );
};

export default MyModal;