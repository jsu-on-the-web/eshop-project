import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CarouselButton = () => {
  return (
      <button className='carousel__button' onClick={() => { }}><FontAwesomeIcon icon={faArrowLeft}  /></button>
  )
}

export default CarouselButton