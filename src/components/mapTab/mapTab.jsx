import './mapTab.scss'
import React, { useEffect, useState } from 'react'

import GoogleMapReact from 'google-map-react';
import { googleMaps } from '@/lib/constants';
import { getPetPoints } from '@/lib/pocketbase';
import { useDispatch, useSelector } from "react-redux";
import Point from './point/point';

const defaultProps = {
  center: {
    lat: 6.2351006,
    lng: -75.5717962
  },
  zoom: 8
};
const MapTab = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const user = useSelector((store) => store.user);




  const [points, setPoints] = useState([])



  const loadData = async () => {
    try {
      const data = await getPetPoints(user.user.id);

      let temp = []
      data.forEach((point, index) => { temp.push({ lat: point.latitude, lng: point.longitude, text: index.toString() }) })
      setPoints(temp)
      
    }
    catch (error) {
      console.log(error.data)
    }
  }

  useEffect(() => {
    if (auth.status != "not-authenticated") {

      loadData()
    }
  }, [user.user])




  return (
    <div id='MapTab'>
      <div className='MapTabH'>
        <img src='/images/dogMagnifier.png' />
        <h2>¿Dónde está mi mascota?</h2>
      </div>

      <div className='MapTabB'>
       

        {points.length > 0 &&
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLEMAPS }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {points.map((point) =>
              <Point
                lat={point.lat}
                lng={point.lng}
                text={point.text}
              />
            )}
          </GoogleMapReact>
        }


      </div>
    </div>
  )
}

export default MapTab