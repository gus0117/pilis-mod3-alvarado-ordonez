import React from 'react'

const Card = ({ location }) => {
  const { id, name, lat, lon, temperature, windspeed } = location;

  return (
    <div className="card">
      <h1>{name}</h1>
      <span>Latitude: {lat}</span>
      <span>Longitude: {lon}</span>
      <span>Temp: {temperature}</span>
      <span>Windspeed: {windspeed}</span>
    </div>
  )
}

export default Card