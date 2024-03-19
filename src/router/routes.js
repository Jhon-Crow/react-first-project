import About from "../pages/About.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Posts from "../pages/Posts.jsx";


export const routes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
]