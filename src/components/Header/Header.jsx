/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

import { faBookAtlas, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
export function Header() {
  return <header className='flex items-baseline justify-center mb-6'>
    {/** Hamburger menu */}
    <FontAwesomeIcon icon={faBars} className='mr-20 md:text-3xl lg:text-6xl' />
    <div className='header__title'>
      <h1 className='mb-5 font-heading xs:text-sm md:text-3xl lg:text-6xl'>
        <FontAwesomeIcon icon={faBookAtlas} className='mr-10' />
        Market of Alexandria
      </h1>
      <h2 className='font-bold font-subheading'>An infinite library, at a fraction of the price</h2>
      </div>
    {
      /** Navbar */
    }

    {/** Cart */}
    <FontAwesomeIcon icon={faShoppingCart} className='ml-10 md:text-3xl lg:text-6xl' />
  </header>;
}
