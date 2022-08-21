import React from 'react'

const Box = (props) => {
  return (
    <div className='weatherBox'>
        <div className='city'>{props.weather&&props.weather.name}</div>
        <h1 className='temperature'>{props.weather&&props.weather.main.temp}C  /  {props.weather&&props.weather.main.temp*1.8+3}F</h1>
        <div className='weather'>{props.weather&&props.weather.weather[0].description}</div>
    </div>
  )
}

export default Box