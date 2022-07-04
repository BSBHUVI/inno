import React from 'react'
import './Card.css'

function Catimg({imga}) {
  return (
    <div>
     <div className="box bb">
     <img className='catimg' src={imga} alt="" />
      </div>
      
    </div>
  )
}

export default Catimg
