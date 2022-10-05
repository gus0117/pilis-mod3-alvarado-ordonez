import React from 'react'
import Card from './Card';

const Cards = ({ locationList }) => {

  return (
    <div className='cards'>
      {
        locationList.length === 0 
        ? <span>No hay elementos</span>
        : locationList.map( (location) => (<Card key={location.id} location={location} />))
      }
    </div>
  )
}

export default Cards