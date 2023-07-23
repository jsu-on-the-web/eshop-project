import React, { useState } from "react";
import styles from "./ProductCard.module.scss"; // Import the SCSS file

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function ProductCard({ productImageSrc, productTitle, productPrice, productIsFavourite }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`${styles.productcard} ${isHovered ? styles.expanded : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Product Image */}
            <img src={productImageSrc} className="w-60 product__image" alt={productTitle} />

            {/* Product Information */}
            <div className="px-4 py-2">
                <p className="product__name text-cork-800 font-body">{productTitle ? productTitle : 'Unknown'}</p>
                <p className="product__price text-cork-800 font-body">
                    {productPrice ? <span>${productPrice}</span> : <span className="product__price-badge">SOLD OUT</span>}
                </p>
                {productIsFavourite ? (
                    <FontAwesomeIcon icon={faHeart} className="product__heart" />
                ) : (
                    <FontAwesomeIcon icon={faHeart} className="product__heart--unfilled" />
                )}
            </div>

            {/* Product Overlay */}
            <div className={`product__overlay ${isHovered ? styles.overlayVisible : ""}`}>
                <div className="product__overlay-content font-body">
                    <p className="text-sm text-sage-100">Add to Cart</p>
                    <p className="text-sm text-sage-100">View Details</p>
                </div>
            </div>
        </div>
    );
}