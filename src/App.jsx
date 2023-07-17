import { ProductCard } from './components/ProductCard/ProductCard';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='grid grid-rows-4 app'>
        {/* Header */}
        <header className=''>

          <h1 className='font-heading'>
            <FontAwesomeIcon icon={faBookAtlas} className='mr-10' />
            Market of Alexandria
          </h1>
          <h2 className='font-bold font-subheading'>An infinite library of goods, at a fraction of the price</h2>
          {/** Navbar */}

        </header>

        {/* Body */}
        <main className='' >
          <p className='font-body'>fssffs</p>
          {/** Carousel */}
          <section>
            <div>

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
