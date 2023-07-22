import React from "react";
import styles from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export function ProductCard({ productImageSrc, productTitle, productPrice, productIsFavourite }) {
    return (
        <div className={` ${styles.productcard}`}>
            <img src={productImageSrc} className=' w-60 product__image'  />
            <p className='product__name'>{productTitle ? productTitle : 'Unknown'}</p>
            <p className='product__price'>{productPrice ? productPrice : "SOLD OUT"}</p>
            {productIsFavourite ? <FontAwesomeIcon icon={faHeart} className='text-black-500' /> : <FontAwesomeIcon icon={faHeart} className='text-sage-200' />}
        </div>
    );
}
