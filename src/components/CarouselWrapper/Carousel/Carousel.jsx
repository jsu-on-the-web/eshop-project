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
        

    return <div className={`${styles.carousel}`}>
        {
            /** Map a list of CarouselCards here, they must have the product image and the name, but nothing else */
        }
        {/* <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard /> */}

        {products.map((product) => (
            <CarouselCard key={product.id} productImageSrc={product.imageUrl} productTitle={product.title} productPrice={product.qualities[3].price} />
        ))}
    </div>;
}
