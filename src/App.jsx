
import { ProductCard } from './components/ProductCard/ProductCard';
import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='grid grid-rows-4 app'>
        {/* Header */}
        <Header />

        {/* Body */}
        <main className='' >
          <p className='font-body'>fssffs</p>
          {/** Carousel */}
          <section>
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

        {/*Footer with dummy contact info */}
      </section>
    </>
  )
}

export default App
