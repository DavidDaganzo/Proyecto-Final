import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import propertiesService from "../../services/Properties.service"
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px'
};

// recibes locaqqtion por props

function Map({ location, propertiesLocation }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo"
    })

    console.log(propertiesLocation)

    const [map, setMap] = React.useState(null)
    // const [propertiesLocation, setPropertiesLocation] = useState[(
    //     propertiesService
    //         .getLocationProperties(location)
    //         .then(({ data }) => {

    //             console.log(data)

    //         })
    //         .catch(err => console.log(err))
    //     // console.log("📍 Coordinates: ", { lat, lng });
    // )]

    const MarkeronLoad = (marker) => {
        console.log("marker: ", marker);
    };

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(location);
        const zoom = 8
        map.fitBounds(bounds);
        map.setZoom(zoom)
        setMap(map)
    }, [])

    const OPTIONS = {
        minZoom: 4,
        maxZoom: 15,
    }
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    console.log('----------------------------', propertiesLocation)

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            location={location}
            options={OPTIONS}
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={location}
        >
            {propertiesLocation && propertiesLocation.map((elm) => {
                const [lat, lng] = elm.location.coordinates

                return (<MarkerF position={{ lat, lng }} />)
            })}
        </GoogleMap>
    )
}

export default React.memo(Map)