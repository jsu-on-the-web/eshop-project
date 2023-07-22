

import { useState, useEffect, useContext } from 'react'
import './App.scss'
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import  ProductsListContextProvider from './context/ProductsListContextProvider';
import { fetchAllProducts } from './services/product-services';

function App() {

    return (
        <>
            <ProductsListContextProvider>
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
            </ProductsListContextProvider>
        </>
    )
}

export default App
