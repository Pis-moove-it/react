import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import MapComponent from './MapComponent';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});

const MapContainer = () => (
  <MapComponent>
    <Map
      // style prop is required by React Mapbox
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
      containerStyle={{
        height: '100%',
        width: '100%',
      }}
      // Add button to detect user's current location
      onStyleLoad={map => map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }))}
    />
  </MapComponent>
);

export default MapContainer;
