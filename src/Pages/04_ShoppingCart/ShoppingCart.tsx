import React from 'react';
import s from './ShoppingCart.module.scss'
import ItemInCart from "../../Components/ItemInCart/ItemInCart";

const ShoppingCart = () => {
    return (
        <div className={s.container}>
            <div className={s.shoppingCart}>
                <div className={s.itemsContainer}>
                    <ItemInCart/>
                    <ItemInCart/>
                    <ItemInCart/>
                </div>
                <form className={s.form}>
                    <label> <input/> </label>
                    <label> <input/> </label>
                    <label> <input/> </label>
                    <label> <input/> </label>
                    <button> заказать</button>
                </form>
            </div>
            <div className={`${s.itemsContainer} ${s.wishContainer}`}>
                Wish List
                <ItemInCart/>
                <ItemInCart/>
                <ItemInCart/>
            </div>
        </div>
    );
};



export default ShoppingCart;