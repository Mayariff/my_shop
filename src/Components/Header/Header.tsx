import React, {useContext} from 'react';
import s from './Header.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import {ROUTE} from "../../Routing/routingData";



const Header = () => {
    const {auth}= useContext(Context)
    const [user]= useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation();


    const logout = async () => {
        await signOut(auth)
        navigate(ROUTE.LOGIN)
    }


    return (
        <header className={s.header}>
            <div className={s.logo}>Логотип</div>
            <nav className={s.navigation}>
                <Link to={ROUTE.CATALOG} className={s.navItem}>Калалог</Link>
                <Link to={ROUTE.ABOUT_BRAND} className={s.navItem}>О бренде</Link>
            </nav>
            <div className={s.buttonMenu}>
                {user ?
                    <button onClick={logout}> Выйти </button>
                    :
                    <Link to={ROUTE.LOGIN} state={{from: location}}>
                        {location.pathname !== '/login' && <button> Войти </button>}
                    </Link>
                }
                {location.pathname !== '/shopping_cart' && <Link to={ROUTE.SHOPPING_CART}>корзина</Link>}
            </div>
        </header>
    );
};

export default Header;