import React from 'react'
import './Card.css';
import paisaje from '../../assets/paisaje.jpg';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiWind } from 'react-icons/bi';
import { MdLocationPin,MdDelete } from 'react-icons/md';
import { BsCalendar2Date } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';


//Card recibe como parametro la funcion deleteCard (para borrar una tarjeta)
const Card = ({ location ,deleteCard, refreshCard }) => {

  const { id, name, lat, lon, temperature, windspeed, date, urlImg } = location;
  return (
    <div className="card">
      <div className="card-head">
          <h1 className="card-title"><MdLocationPin className='location-icon'/>{name}</h1>
          <button className='button card-refresh' onClick={() => refreshCard(id, lat, lon)}><TbRefresh /></button>
      </div>
      <div className="card-body">
        { urlImg === "" ? 
          <img className="card-img" src={paisaje} alt="Card Image" /> : 
          <img className="card-img" src={urlImg} alt="Card image" crossOrigin='anonymous' />
        }
        
        <div className="lat-lon">
          <p>Latitude: {lat}</p>
          <p>Longitude: {lon}</p>
        </div>
        <div className="temp-wind">
          <p className='temp'><FaTemperatureLow className='temp-icon'/> {temperature} °C</p>
          <p className='windspeed'><BiWind className='wind-icon'/> {windspeed} km/h</p>
        </div>
        <p className='calendar'><BsCalendar2Date className='calendar-icon'/> {date}</p>
      </div>
      
      <button className='button' onClick={()=>{deleteCard(id)}}><MdDelete/></button>
    </div>
  )
}

export default Card