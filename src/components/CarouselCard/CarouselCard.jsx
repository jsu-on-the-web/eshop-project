import React from "react";
import styles from "./CarouselCard.module.scss";
export function CarouselCard({ productImageSrc, productTitle, productPrice }) {
    return (
        <div className={` ${styles.carouselcard}`}>
            <img src="https://picsum.photos/201" className='product__image' />
            <div className={`${ styles.product__info }`}>
                <p className='product__name'>{productTitle ? productTitle : 'Unknown'}</p>
                <p className='product__price'>{productPrice ? productPrice : "SOLD OUT"}</p>
            </div>
        </div>
    );
}
