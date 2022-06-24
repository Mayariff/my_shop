import React from 'react';
import s from './ItemInCart.module.scss'

const ItemInCart = () => {
    return (
        <div className={s.item}>
            <div className={s.img}>картинка </div>
            <div className={s.info} >
            <h2>Название</h2>
                <div className={s.options}>
                <div>Категория</div>

            <div className={s.settings}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
                </div>
          </div>
        </div>
    );
};

export default ItemInCart;