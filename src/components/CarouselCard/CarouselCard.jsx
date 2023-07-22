import React from "react";
import styles from "./CarouselCard.module.scss";
import { Link } from "react-router-dom";
export function CarouselCard({ key, productImageSrc, productTitle, productPrice }) {
    return (
        <Link to={`/products/${key}`}>
            <div className={` ${styles.carouselcard}`}>
                <img src={productImageSrc} className='w-40 product__image max-h-50' />
                <div className={`${styles.product__info}`} >
                    <p className='text-xs text-left text-sage-600'>{"Starting from".toUpperCase() }</p>
                    <p className='text-left text-sage-400 product__price'>{productPrice ? '$' + productPrice : "SOLD OUT"}</p>
                    <p className='product__name'>{productTitle ? productTitle.toUpperCase() : 'Unknown'}</p>

                </div>
            </div>
        </Link>
    );
}
