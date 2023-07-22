import { Carousel } from '../../components/CarouselWrapper/Carousel/Carousel';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { CarouselCard } from '../../components/CarouselCard/CarouselCard';
import CarouselWrapper from '../../components/CarouselWrapper/CarouselWrapper';
import { ProductsListContext } from '../../context/ProductsListContextProvider';

const HomePage = () => {
  const { products } = useContext(ProductsListContext);
  return (
    <>
      {/* Body */}
      <main className='' >
        {/** Carousel */}
        <section>
          <h2 className='m-5 mt-32 text-5xl mb-15 font-subheading'>Featured Products</h2>
          <CarouselWrapper products={products} />
        </section>
        {/** Products Grid */}
        <ProductGrid products={products} />
      </main>
    </>
  )
}

export default HomePage