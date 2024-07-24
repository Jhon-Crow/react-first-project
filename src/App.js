import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/context.js";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false);
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
        {/*    контекст)))*/}
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
}

export default App;
