import {useState, useEffect, useContext} from "react";
import styles from "./CarouselWrapper.module.scss";
import { CarouselCard } from "../../CarouselCard/CarouselCard";
import { ProductsListContext } from "../../../context/ProductsListContextProvider";
export function Carousel({ currentIndex, onPrevious, onNext }) {
    //  const { shownProducts, setShownProducts } = useState([]);

    const { products } = useContext(ProductsListContext);
    // useEffect(() => {
    //     setShownProducts(products);
    //  }, [products, setShownProducts, shownProducts]);
        
    const [visibleProducts, setVisibleProducts] = useState([]);

    useEffect(() => {
        setVisibleProducts(products.slice(currentIndex, currentIndex + 4));
    }, [products, currentIndex]);

    return <div className={`${styles.carousel}`}>
        {visibleProducts.map((product) => (
            <CarouselCard key={product.id} productImageSrc={product.imageUrl} productTitle={product.title} productPrice={product.qualities[3].price} />
        ))}
    </div>;
}
