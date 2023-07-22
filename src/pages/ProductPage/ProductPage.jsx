import React from 'react'
import { ProductsListContext } from '../../context/ProductsListContextProvider';

const ProductPage = () => {
    const { products } = useContext(ProductsListContext);
    return (
        <>
            <main>
                <section>
                    <h2>{product.title}</h2>
                </section>
        </main>
        </>
    )
}

export default ProductPage