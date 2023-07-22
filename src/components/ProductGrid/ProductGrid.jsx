import {useContext} from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsListContext } from "../../context/ProductsListContextProvider";
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
          <ProductCard key={product.id} productImageSrc={product.imageUrl} productTitle={product.title} productPrice={product.qualities[3].price} productIsFavourite={product.isFavourite}/>
        ))}
      </section>;
    </>
  )
}
