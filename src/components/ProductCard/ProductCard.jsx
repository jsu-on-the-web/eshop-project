import React from "react";
import styles from "./ProductCard.module.scss";
export function ProductCard({ productImageSrc, productTitle, productPrice }) {
    return (
        <div className={` ${styles.productcard}`}>
            <img src="https://picsum.photos/200" className='product__image'  />
            <p className='product__name'>{productTitle ? productTitle : 'Unknown'}</p>
            <p className='product__price'>{productPrice ? productPrice : "SOLD OUT"}</p>
        </div>
    );
}
