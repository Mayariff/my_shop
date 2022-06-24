import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer} >
            <div className={s.instagram}>
                <a>Инста Магазина Юли</a>
            <span> Материалы предоставлены магазином Никулиной Юли</span>
            </div>
            <span> Pet-проект Девятковой Майи</span>
        </div>
    );
};

export default Footer;