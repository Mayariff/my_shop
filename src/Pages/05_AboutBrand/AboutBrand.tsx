import React from 'react';
import s from './AboutBrand.module.scss'

const BrandPage = () => {
    return (
        <div className={s.aboutBrandContainer}>
            <div className={s.blockInfo}>
            <div className={s.info}>
            <h1 className={s.header}> <em>HELLO,</em>  <br/> I’M CLARA </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <blockquote className={s.blockquote}>
                <div>
                    There is no charm equal to tenderness of heart.
                </div>
            </blockquote>
            </div>
                <div className={s.image}> </div>
        </div>
         <div className={s.blockButton}>
             <h1 className={s.accentPhrase}>Want to start selling online? You can't blame gravity for falling in love.</h1>
             <button>
               IT STARTS WITH A CLICK
             </button>
         </div>
        </div>
    );
};

export default BrandPage;