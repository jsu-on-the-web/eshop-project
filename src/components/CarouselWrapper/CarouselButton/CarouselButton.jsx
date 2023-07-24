import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CarouselButton = ({direction, onClick}) => {
  return (
    <button className='carousel__button' onClick={onClick}>
      {direction === 'left' ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
    </button>
  )
}

export default CarouselButton