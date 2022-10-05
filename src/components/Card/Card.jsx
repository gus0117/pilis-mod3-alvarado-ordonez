import React from 'react'
import './Card.css';
import paisaje from '../../assets/paisaje.jpg';
import { FaTemperatureLow } from 'react-icons/fa';
import { BiWind } from 'react-icons/bi';
import { MdLocationPin } from 'react-icons/md';

const Card = ({ location }) => {
  const { id, name, lat, lon, temperature, windspeed } = location;

  return (
    <div className="card">
      <h1 className="card-title">{name}</h1>
      <img className="card-img" src={paisaje} alt="" srcset="" />
      <p><MdLocationPin />{lat}, {lon}</p>
      <p><FaTemperatureLow /> {temperature} °C</p>
      <p><BiWind /> {windspeed} km/h</p>
    </div>
  )
}

export default Card