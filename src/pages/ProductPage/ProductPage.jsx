import { useContext, useState, useEffect } from 'react';
import { ProductsListContext } from '../../context/ProductsListContextProvider';
import { useParams } from 'react-router-dom';
import { formatDate, capitalizeFirstLetter } from '../../services/generalUtils';

const ProductPage = () => {
    const { products } = useContext(ProductsListContext);
    const { id } = useParams();
    const [selectedQuality, setSelectedQuality] = useState('');

    const [selectedQualityData, setSelectedQualityData] = useState(null);
    const [selectedQualityPrice, setSelectedQualityPrice] = useState(null);

    const handleQualityChange = (e) => {
        const newQuality = e.target.value;
        setSelectedQuality(newQuality);
        console.log("Set selected quality to " + selectedQuality);
    }

    // Reset the selected quality when a new product loads in
    useEffect(() => {
        setSelectedQuality('new');
    }, [id]); // Add 'id' to the dependency array to reset when a new product is loaded

    useEffect(() => {
        console.log("Selected quality:", selectedQuality);
    }, [selectedQuality]);

    useEffect(() => {
        if (products && products.length > 0) {
            const product = products.find((product) => product.id === id);
            if (product && product.qualities) {
                const newSelectedQualityData = product.qualities.find((qual) => qual.id === selectedQuality) || null;
                setSelectedQualityData(newSelectedQualityData);
                setSelectedQualityPrice(newSelectedQualityData ? newSelectedQualityData.price : null);
            }
        }
    }, [selectedQuality, products, id]);



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



    console.log("Product Data: ", product);
    return (
        <>
            <main>
                <section className='py-16 mx-auto max-w-8xl sm:py-24'>
                    <div className='flex'>
                        <img className='object-cover w-80' src={imageUrl} alt={title} />
                        <div className='flex flex-col items-center flex-1 pb-4 ml-8 border-b-2 border-timberwolf-500'>
                            <h2 className='text-4xl italic font-heading'>{title}</h2>

                            {/* All the elements dependent on quality */}
                            <select value={selectedQuality} onChange={handleQualityChange} className='max-w-sm mt-4'>
                                <option value="new">Select Quality</option>
                                {qualities.map((qual) => (
                                    <option key={qual.id} value={qual.id}>{capitalizeFirstLetter(qual.quality)}</option>
                                ))}
                            </select>

                            {selectedQuality !== "new" && selectedQualityData && (
                                <div className='mt-4'>
                                    <p className='font-light font-body'>{selectedQualityPrice}</p>
                                </div>
                            )}

                            {/* End of quality dependent elements */}
                            <p></p>
                            <p className='mt-4 overflow-y-auto text-lg font-body'>{description}</p>
                        </div>
                    </div>

                    <div className='items-center justify-center flex-1 mt-10 ml-8 font-body'>
                        <p><span className='font-bold'>Date Published:</span> {formatDate(publishedDate)}</p>
                        <p><span className='font-bold'>Page Count:</span> {pageCount}</p>
                        <p><span className='font-bold'>Category:</span> {capitalizeFirstLetter(category)}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductPage;
