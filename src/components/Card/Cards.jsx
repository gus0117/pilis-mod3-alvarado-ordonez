import React, { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../../context/LocationContext';
import Card from './Card';
import './Cards.css';

const Cards = ({ locationList }) => { 
  const {setLocationList } = useContext(LocationContext); 
  const deleteCard = id =>{
    localStorage.removeItem(id)
    console.log(locationList);
    console.log(locationList[id]);
    locationList = locationList.filter(card=>card.id!==id)
    console.log(locationList);
    setLocationList(locationList)
  }

  return (
    <div className='cards'>
      {
        locationList.length === 0 
        ? <span>No hay elementos</span>
        : locationList.map( (location) => (<Card key={location.id} location={location} deleteCard={deleteCard}/>))
      }
    </div>
  )
}

export default Cards