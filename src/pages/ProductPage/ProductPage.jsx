import {useContext} from 'react'
import { ProductsListContext } from '../../context/ProductsListContextProvider';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { products } = useContext(ProductsListContext);
    const { id } = useParams();

    // Find the item with the corresponding ID in the products array in the ProductsListContext
    const product = products.find((product) => product.id === id);

    // If we don't find it, return a 404 page
    if (!product) {
        return (
            <main>
                <section className='max-w-2xl py-16 mx-auto sm:py-24'>
                    <h2 className='text-5xl font-subheading'>404</h2>
                    <h3 className='mt-4 text-xl font-body'>Sorry, we couldn&apos;t find that page.</h3>
                </section>
            </main>
        )
    }
    return (
        <>
            <main>
                <section>
                    {/* <h2>{product.title}</h2> */}
                    <h2></h2>
                </section>
        </main>
        </>
    )
}

export default ProductPage