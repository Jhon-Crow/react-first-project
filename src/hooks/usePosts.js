import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort){
            console.log('selectedSort')
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;

    }, [sort, posts])  //если зависимость поменяет значение вызывает колбек (сохранает сортированный чтоб оптимизировать)

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    // const response = fetchPosts();
    // posts = [...posts, response]
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query)) //ВНИМАНИЕ так делается поиск
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}