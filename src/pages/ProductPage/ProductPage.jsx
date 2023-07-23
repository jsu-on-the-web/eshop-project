import { useContext } from 'react'
import { ProductsListContext } from '../../context/ProductsListContextProvider';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../services/generalUtils';

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

    const { imageUrl, title, description, qualities, isFavourite, category, publishedDate, pageCount } = product;
    return (
        <>
            <main>
                <section className='py-16 mx-auto max-w-8xl sm:py-24'>
                    <div className='flex'>
                        <img className='object-cover w-80' src={imageUrl} alt={title} />
                        <div className='flex flex-col flex-1 pb-4 ml-8 border-b-2 border-timberwolf-500'>
                            <h2 className='text-4xl italic font-heading'>{title}</h2>

                            {/* All the elements dependent on quality */}

                            {/* End of quality dependent elements */}
                            <p></p>
                            <p className='mt-4 overflow-y-auto text-lg font-body'>{description}</p></div>
                    </div>

                    <div className='items-center justify-center flex-1 mt-10 ml-8 font-body'>
                        <p><span className='font-bold'>Date Published:</span> {formatDate(publishedDate)}</p>
                        <p><span className='font-bold'>Page Count:</span> {pageCount}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductPage