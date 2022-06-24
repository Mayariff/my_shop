import React from 'react';
import s from './ProductCard.module.scss'

const ProductCard = () => {
    return (
        <div className={s.productCard}>
          <div className={s.img}> </div>
          <div className={s.card}>
            <h1> PRODUCT NAME </h1>
              <div> 250 pyb </div>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
              <div><input type={'number'}/> <button> Add to Cart </button> </div>
              <div> Wishlist  <input type={'checkbox'}  /></div>
          </div>
        </div>
    );
};

export default ProductCard;