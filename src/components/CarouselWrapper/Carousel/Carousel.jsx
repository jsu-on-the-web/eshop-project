import {useState, useEffect} from "react";
import styles from "./CarouselWrapper.module.scss";
import { CarouselCard } from "../../CarouselCard/CarouselCard";
export function Carousel({ products, currentIndex, onPrevious, onNext }) {
    const { shownProducts, setShownProducts } = useState([]);
    
    // useEffect(() => {
    //     setShownProducts(products);
    //  }, [products, setShownProducts, shownProducts]);
        

    return <div className={`${styles.carousel}`}>
        {
            /** Map a list of CarouselCards here, they must have the product image and the name, but nothing else */
        }
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />

    </div>;
}
