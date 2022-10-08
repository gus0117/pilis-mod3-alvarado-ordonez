import React from 'react'
import './Card.css';
import paisaje from '../../assets/paisaje.jpg';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiWind } from 'react-icons/bi';
import { MdLocationPin,MdDelete } from 'react-icons/md';
//Card recibe como parametro la funcion deleteCard (para borrar una tarjeta)
const Card = ({ location ,deleteCard}) => {
  const { id, name, lat, lon, temperature, windspeed } = location;

  return (
    <div className="card">
      <h1 className="card-title">{name}</h1>
      <img className="card-img" src={paisaje} alt="" srcSet="" />
      <p><MdLocationPin className='location-icon'/>{lat}, {lon}</p>
      <p><FaTemperatureLow className='temp-icon'/> {temperature} °C</p>
      <p><BiWind className='wind-icon'/> {windspeed} km/h</p>
      <button className='button' onClick={()=>{deleteCard(id)}}><MdDelete/></button>
    </div>
  )
}

export default Card