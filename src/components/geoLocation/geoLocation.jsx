import React, { useState } from 'react'
import { useGeolocated } from "react-geolocated";

const GeoLocation = () => {
   
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 10000,
    });
    useEffect(() => {
        if (isGeolocationEnabled) {
          alert('Geolocation enabled!');
        }
      }, [isGeolocationEnabled]);
    return (
   <>
   {isGeolocationEnabled&&
    <>{coords&&<>
     <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    </>}</>
   }
   </>
  )
}

export default GeoLocation