/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Carousel } from '../../components/CarouselWrapper/Carousel/Carousel';

const CarouselWrapper = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);


    const handlePrevious = () => {
        // The use of max here means we compare between previousIndex - 1 and 0.
        // This is so that we don't go out of bounds and instead wrap back to 0 if we do
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        // Similar to the previous function, but we wrap around to products.length - 4
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, products.length - 4));
    };
    return (
        <section className='m-5 mb-17'>
            <Carousel
                products={products}
                currentIndex={startIndex}
                onPrevious={handlePrevious}
                onNext={handleNext} />
        </section>
    )
}

export default CarouselWrapper