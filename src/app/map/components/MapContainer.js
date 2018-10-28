import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import MultiTouch from 'mapbox-gl-multitouch';
import axios from 'axios';
import MapComponent from '../styles/MapComponent';
import trashLogo from '../assets/trash.png';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});

const enableMobileScroll = (map) => {
  if (window.innerWidth <= 425) {
    map.addControl(new MultiTouch());
  }
};

// Used for rendering the trash and user icons (see Layer component below)
const trashIcon = new Image(60, 60);
trashIcon.src = trashLogo;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Store containers list from backend
      containers: [],
    };
  }

  componentDidMount() {
    // Fetch container list from backend
    // url will change to one from a backend service (which should be placed in .env file
    // and called like
    // process.env.REACT_APP_API_CONTAINERS_LIST, where REACT_APP_API_CONTAINERS_LIST
    // is the variable containing the url in .env file)
    axios.get('http://localhost:3000/containers.json').then((res) => {
      this.setState({
        containers: res.data,
      });
    });
  }

  render() {
    const { containers } = this.state;

    return (
      <MapComponent>
        <Map
        // style prop is required by React Mapbox
          style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
          containerStyle={{
            height: '100%',
            width: '100%',
          }}
          center={[-56.165293, -34.889631]}
          zoom={[11.5]}
          onStyleLoad={
          (map) => {
            // Add button to detect user's current location
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
        >
          <Layer // Layer with trashes
            type="symbol"
            id="trashes"
            layout={{ 'icon-image': 'trash', 'icon-allow-overlap': true }}
            images={['trash', trashIcon]}
          >
            {/* Add containers from state */}
            { containers.map(elem => (
              <Feature
                key={elem.id}
                coordinates={[elem.lng, elem.lat]}
              />)) }
          </Layer>
        </Map>
      </MapComponent>
    );
  }
}

export default MapContainer;
