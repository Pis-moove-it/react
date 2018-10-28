import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import MultiTouch from 'mapbox-gl-multitouch';
import MapComponent from '../styles/MapComponent';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});

const enableMobileScroll = (map) => {
  if (window.innerWidth <= 425) {
    map.addControl(new MultiTouch());
  }
};

const MapContainer = () => (
  <MapComponent>
    <Map
      // style prop is required by React Mapbox
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
      containerStyle={{
        height: '100%',
        width: '100%',
      }}
      center={[-54.330362, -34.482448]}
      zoom={[15.5]}
      // Add button to detect user's current location
      onStyleLoad={
        (map) => {
          map.addControl(new mapboxgl.GeolocateControl({
            position: 'bottom-right',
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }));
          map.addControl(new mapboxgl.NavigationControl());
          enableMobileScroll(map);
          map.addControl(new mapboxgl.FullscreenControl());
          map.addControl(new mapboxgl.ScaleControl());
        }
      }
    />
  </MapComponent>
);

export default MapContainer;
