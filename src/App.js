import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import 'Navigate' for redirection
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/context.js";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
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
