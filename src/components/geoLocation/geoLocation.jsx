import { newLocationBd } from '@/lib/pocketbase';
import React, { useState, useEffect } from 'react'
import { useGeolocated } from "react-geolocated";

const GeoLocation = ({ petOwner }) => {
    const [flag, setFlag] = useState(true)
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 10000,
        });

    const newLocation = async (petOwner, latitude, longitude) => {

        if (flag) {
            try {
                let result = await newLocationBd(petOwner, coords?.latitude, coords?.longitude)
                setFlag(!flag)
            }
            catch (error) {
                throw error
            }
        }
    }

    useEffect(() => {


        if (coords?.latitude != undefined) {
            newLocation(petOwner, coords?.latitude, coords?.longitude)
        }

    }, [coords]);

    return <></>
}

export default GeoLocation