import { useContext } from 'react'
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

    const {imageUrl, title, description, qualities, isFavourite, category, publishedDate, pageCount } = product;
    return (
        <>
            <main>
                <section className='flex py-16 mx-auto max-w-8xl sm:py-24'>
                    <img className='object-cover w-80' src={imageUrl} alt={title} />
                    <div className='flex flex-col flex-1 ml-8'>
                        <h2 className='text-4xl italic font-heading'>{title}</h2>

                        {/* All the elements dependent on quality */}

                        <p></p>
                        <p className='mt-4 text-lg font-body'>{description}</p></div>
                </section>
            </main>
        </>
    )
}

export default ProductPage