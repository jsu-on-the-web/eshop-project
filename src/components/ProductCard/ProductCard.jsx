import React from "react";
export function ProductCard({ productImageSrc, productTitle, productPrice }) {
    return (
        <div className='flex flex-col content-center product-card'>
            <img src="https://picsum.photos/200" className='product__image'  />
            <p className='product__name'>{productTitle}</p>
            <p className='product__price'>Price</p>
        </div>
    );
}
