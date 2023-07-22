/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

import { faBookAtlas, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
export function Header() {
  return <header className='flex items-start justify-around mt-0 mb-6 md:mt-5'>
    <div className="absolute flex items-start justify-around mt-0 mb-6 top-2 lg:top-4 md:mt-5">{/** Hamburger menu */}
      <FontAwesomeIcon icon={faBars} className='ml-4 mr-20 md:text-3xl lg:text-6xl' />
      <div className=' header__title'>
        <h1 className='mb-2 text-lg font-heading sm:text-4xl md:text-5xl lg:text-6xl'>
          <FontAwesomeIcon icon={faBookAtlas} className='mr-10' />
          Market of Alexandria
        </h1>
        <h2 className='font-bold xs:opacity-0 sm:opacity-100 font-subheading'>An infinite library, at a fraction of the price</h2>
      </div>
      {
        /** Navbar */
      }

      {/** Cart */}
      <FontAwesomeIcon icon={faShoppingCart} className='ml-10 md:text-3xl lg:text-6xl' /></div>
  </header>;
}
