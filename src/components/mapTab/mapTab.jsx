import React from 'react'
import './mapTab.scss'
const MapTab = () => {
  return (
    <div id='MapTab'>
                <div className='MapTabH'>
                  <img src='/images/dogMagnifier.png' />
                  <h2>¿Dónde está mi mascota?</h2>
                </div>

                <div className='MapTabB'>
                  <img src='/images/fakeMap.png' />
                </div>
              </div>
  )
}

export default MapTab