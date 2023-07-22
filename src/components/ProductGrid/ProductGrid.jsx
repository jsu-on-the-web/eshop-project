import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
export function ProductGrid({ products }) {
  return (
    <>
      <section className='grid grid-cols-2 gap-3 products-grid'>
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </section>;
    </>
  )
}
