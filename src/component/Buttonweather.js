import React from 'react'
import { Button } from 'react-bootstrap'


const Buttonweather = ({cityArray,setCity,cityCurrent}) => {
  return (
    <div>
        <Button variant="warning" onClick={()=>cityCurrent('current')}>current location</Button>
        {cityArray.map((item,index)=>(
          <Button variant="warning" key={index} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default Buttonweather