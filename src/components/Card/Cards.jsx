import React from 'react'
import Card from './Card';

const Cards = ({ locationsList }) => {

  return (
    <div className='cards'>
      {
        locationsList.length === 0 
        ? <span>No hay elementos</span>
        : locationsList.map( (location) => (<Card key={location.id} location={location} />))
      }
    </div>
  )
}

export default Cards