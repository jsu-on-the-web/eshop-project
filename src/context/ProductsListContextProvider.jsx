import { createContext, useState, useEffect } from 'react';
import { fetchAllProducts, fetchProductsById } from '../services/product-services';

export const ProductsListContext = createContext([]);
const ProductsListContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetchAllProducts().then((data) => {
            try {
                setProducts(data);
                console.log("Products loaded successfully");
            } catch (error) {
                console.log(error);
            }
        });
    }, []);

    return (
        <ProductsListContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsListContext.Provider>
    )
}

export default ProductsListContextProvider;
