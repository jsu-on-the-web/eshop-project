/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

import { faBookAtlas, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
export function Header() {
  return <header className='flex items-baseline'>
    {/** Hamburger menu */}
    <FontAwesomeIcon icon={faBars} className='mr-20' />
    <div className='header__title'>
      <h1 className='mb-5 font-heading md:text-xs'>
        <FontAwesomeIcon icon={faBookAtlas} className='mr-10' />
        Market of Alexandria
      </h1>
      <h2 className='font-bold font-subheading'>An infinite library, at a fraction of the price</h2>
      </div>
    {
      /** Navbar */
    }

    {/** Cart */}
    <FontAwesomeIcon icon={faShoppingCart} className='ml-10' />
  </header>;
}
