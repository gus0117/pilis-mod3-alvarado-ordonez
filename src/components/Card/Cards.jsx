import React, { useContext } from 'react'
import { LocationContext } from '../../context/LocationContext';
import Card from './Card';
import './Cards.css';
import { getLocation } from '../../Service'
import { getCurrentDate } from '../../utils/Util'

const Cards = ({ locationList }) => { 
  const {setLocationList } = useContext(LocationContext); 
  
  const deleteCard = id =>{
    locationList = locationList.filter(card=>card.id!==id)
    setLocationList(locationList)
    localStorage.setItem("locations", JSON.stringify(locationList));
  }

  const refreshWeather = (id, lat, lon) => {
    getLocation(lat, lon)
      .then(({ current_weather }) => {
        locationList.map(location => {
          if(location.id === id){
            location.temperature = current_weather.temperature;
            location.windspeed = current_weather.windspeed;
            location.date= getCurrentDate();
          }
        })

        //Actualizar la lista
        setLocationList(locationList);
        localStorage.setItem("locations", JSON.stringify(locationList));
      })
      .catch( (error) => console.log(error))
  }

  return (
    <div className='cards'>
      {
        locationList.length === 0 
        ? <span className='no-cards'>No hay elementos</span>
        : locationList.map( (location) => (<Card key={location.id} location={location} deleteCard={deleteCard} refreshCard={refreshWeather} />))
      }
    </div>
  )
}

export default Cards