/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react';
import { Carousel } from '../../components/CarouselWrapper/Carousel/Carousel';
import { ProductsListContext } from '../../context/ProductsListContextProvider';
import CarouselButton from './CarouselButton/CarouselButton';

const CarouselWrapper = () => {
    const { products } = useContext(ProductsListContext);

    const featuredProducts = products ? products.filter(product => product.category === "science" || product.category === "technology") : [];
    console.log("Featured products:", featuredProducts);
    const [startIndex, setStartIndex] = useState(0);

    const visibleProducts = featuredProducts.slice(startIndex, startIndex + 4);
    const handlePrevious = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, featuredProducts.length - 4));
    };

    useEffect(() => {
        console.log("All products:", products);
    }, [products]);

    useEffect(() => {
        console.log("Visible products:", visibleProducts);
    }, [visibleProducts]);

    return (
        <section className='flex m-5 mb-17'>
            <CarouselButton className='w-12 h-12' direction='left' onClick={handlePrevious} />
            <Carousel
                products={visibleProducts}
                currentIndex={startIndex}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
            <CarouselButton direction='right' onClick={handleNext} />
        </section>
    );
}

export default CarouselWrapper;