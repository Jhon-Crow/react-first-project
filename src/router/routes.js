import About from "../pages/About.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Posts from "../pages/Posts.jsx";
import Login from "../pages/Login.jsx";


export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true}
]

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
]