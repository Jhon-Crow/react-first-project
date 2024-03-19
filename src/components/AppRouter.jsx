import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";

const AppRouter = () => {
    return (
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route exect path='/posts' element={<Posts/>} />
                <Route exect path='/posts/:id' element={<PostIdPage/>}/>
                <Route path='/error' element={<Error/>} />
                <Route path='*' element={<Navigate to="/error" />} /> {/* Add a default redirect */}
            </Routes>
    );
};

export default AppRouter;