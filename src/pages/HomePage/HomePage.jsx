import { CarouselWrapper } from '../../components/CarouselWrapper/CarouselWrapper';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { CarouselCard } from '../../components/CarouselCard/CarouselCard';

const HomePage = () => {
  return (
    <>
      {/* Body */}
      <main className='' >
        {/** Carousel */}
        <section>
          <h2 className='mb-5 text-5xl font-subheading'>Featured Products</h2>
          <CarouselWrapper />
        </section>
        {/** Products Grid */}
        <ProductGrid />
      </main>
    </>
  )
}

export default HomePage