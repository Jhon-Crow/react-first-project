import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import {AuthContext} from "../context/context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Log in on this page!</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Login'/>
                <MyInput type='password' placeholder='Password'/>
                <MyButton>Sing in</MyButton>
            </form>
        </div>
    );
};

export default Login;