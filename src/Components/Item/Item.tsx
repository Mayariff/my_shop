import React from 'react';
import {Link, useParams} from "react-router-dom";
import s from './Item.module.scss'

const Item = () => {
    const {itemID} = useParams();
    return (
        <Link className={s.itemContainer} to={'111'}>
            <div className={s.img}> </div>
        <div className={s.info}>
            <h2> Сережки </h2>
            <div>
                <span> Price </span> <span>100 руб.</span>
            </div>
        </div>
        </Link>
    );
};

export default Item;