import React from 'react'

const SpecialOfferCards = (prop) => {
  return (
    <div className='SpecialOfferCards card'>
      <img src={prop.img} className='special-offer-image'/>
      <h2 className='special-offer-title'>{prop.title}</h2>
      <h3 className='special-offer-price'>{prop.price}/-</h3>
      <h4 className='special-offer-duration'>{prop.duration} months</h4>
    </div>
  )
}

export default SpecialOfferCards
