import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "../router/routes.js";
import {AuthContext} from "../context/context.js";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }

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
                <Route path='*' element={<Navigate to="/login" />} /> {/* Add a default redirect */}
            </Routes>
    );
};

export default AppRouter;