
import { ProductCard } from './components/ProductCard/ProductCard';
import { useState, useEffect } from 'react'
import './App.scss'
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import { fetchAllProducts } from './services/product-services';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts().then((data) => {
        setProducts(data);
    })
  }, []);
  return (
    <>
      <section className='flex flex-col'>
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
