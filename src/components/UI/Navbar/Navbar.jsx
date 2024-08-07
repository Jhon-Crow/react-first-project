import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
   const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            {isAuth && <MyButton onClick={logout}>
                Log out
            </MyButton>}
            <div className="navbar__links">
                <Link className="navbar__link-item" to="/about">О сайте</Link>
                <Link className="navbar__link-item" to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;