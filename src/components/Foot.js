import React from 'react'
import './Card.css'

function Foot({name,role}) {
  return (
    <div className='foot1'>
      <div className="foot">
          <h2 className='f fz'>{name}</h2>
          <h5 className='f'>{role}</h5>
      </div>
    </div>
  )
}

export default Foot
