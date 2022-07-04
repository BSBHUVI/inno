import React from 'react'
import './Card.css'

function Cat({name}) {
  return (
    <div>
      <div className="box">
     <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Cat
