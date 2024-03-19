import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return; // если грузится то не создаём
        if(observer.current) observer.current.disconnect(); //отключаем старый
        var cb = function (entries, observer){
            if(entries[0].isIntersecting && canLoad){
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}