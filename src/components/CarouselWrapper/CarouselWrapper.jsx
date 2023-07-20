import React from "react";
import styles from "./CarouselWrapper.module.scss";
import { CarouselCard } from "../CarouselCard/CarouselCard";
export function CarouselWrapper({}) {
  return <div className={`${styles.carousel__wrapper}`}>
            {
      /** Map a list of CarouselCards here, they must have the product image and the name, but nothing else */
    }
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </div>;
}
  