import React from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard/ProductCard'

const HomePage = () => {
  return (
    <>
      {/* Body */}
      <main className='' >
        {/** Carousel */}
        <section>
          <h2 className='mb-5 text-5xl font-subheading'>Featured Products</h2>
          <div>
            {/** Map a list of CarouselCards here, they must have the product image and the name, but nothing else */}
          </div>
        </section>
        {/** Products Grid */}
        <section className='grid grid-cols-2 products-grid'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
    </>
  )
}

export default HomePage