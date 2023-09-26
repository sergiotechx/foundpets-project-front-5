import React from 'react'
import {pointStyle} from './pointStyle.js';

const Point = ({text}) => {
  return (

    <div style={pointStyle}>
    {text}
   
  </div>
    
  )
}

export default Point
