import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router/routes.js";
import {AuthContext} from "../context/context.js";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        isAuth
        ?   <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exect={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to="/posts" />} /> {/* Add a default redirect */}
            </Routes>
        :   <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exect={route.exact}
                        key={route.path}
                    />
                )}

                {/*<Route path='/about' element={<About/>} />*/}
                {/*<Route exect path='/posts' element={<Posts/>} />*/}
                {/*<Route exect path='/posts/:id' element={<PostIdPage/>}/>*/}
                {/*<Route path='/error' element={<Error/>} />*/}
                <Route path='*' element={<Navigate to="/login" />} /> {/* Add a default redirect */}
            </Routes>
    );
};

export default AppRouter;