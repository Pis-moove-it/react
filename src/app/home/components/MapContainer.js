import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import MapComponent from './MapComponent';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
});

// in render()
const MapContainer = () => (
  <MapComponent>
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100%',
        "-webkit-box-sizing": 'border-box',
        "-moz-box-sizing": 'border-box',
        "box-sizing": 'border-box',
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  </MapComponent>
);

export default MapContainer;
