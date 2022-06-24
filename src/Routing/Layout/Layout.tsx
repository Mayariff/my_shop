import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import s from './Layout.module.scss'

const Layout = () => {
    return (
        <>
            <div className={s.layout}>
            <Header/>
                <div className={s.container}>
                    <Outlet/>
                </div>
            <Footer/>
            </div>
        </>

    );
};


export default Layout;
