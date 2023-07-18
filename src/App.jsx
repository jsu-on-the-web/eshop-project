
import { ProductCard } from './components/ProductCard/ProductCard';
import { useState, useEffect } from 'react'
import './App.scss'
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <>
      <section className='grid grid-rows-4 app'>
        {/* Header */}
        <Header />

        {/* Body */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products/:id' element={<ProductPage />} />
          </Routes>
        </BrowserRouter>

        {/*Footer with dummy contact info */}
      </section>
    </>
  )
}

export default App
