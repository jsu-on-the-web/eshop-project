import {useContext} from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsListContext } from "../../context/ProductsListContextProvider";
import { Link } from "react-router-dom";
export function ProductGrid() {
   const {products} = useContext(ProductsListContext);
  return (
    <>
      <section className='grid grid-cols-2 gap-3 products-grid'>
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}

        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard key={product.id} productImageSrc={product.imageUrl} productTitle={product.title} productPrice={product.qualities[3].price} productIsFavourite={product.isFavourite} />

            </Link>
        ))}
      </section>;
    </>
  )
}
