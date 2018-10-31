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

async function getData() {
  let apikeyLogin = null;
  await axios.post(
    process.env.REACT_APP_CORS + process.env.REACT_APP_API_LOGIN,
    { name: 'Abrojo', password: 'password' },
    {
      headers: {
        deviceIdHeader: 'prueba',
        deviceTypeHeader: 'prueba',
        'Content-Type': 'application/json',
      },
    },
  )
    .then((responseLogin) => {
      const { apikey } = responseLogin.headers;
      apikeyLogin = apikey;
    })
    .catch((error) => {
      console.log(error);
      if (error.response) { // If a response has been received from the server
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  // Fetch container list from backend
  await axios.get(
    process.env.REACT_APP_CORS + process.env.REACT_APP_API_CONTAINERS,
    {
      headers: {
        deviceIdHeader: 'prueba',
        deviceTypeHeader: 'prueba',
        'Content-Type': 'application/json',
        ApiKey: apikeyLogin,
      },
    },
  )
    .then((res) => {
      this.setState({
        containers: res.data,
      });
    })
    .catch((error) => {
      console.log('Api Key GET error', apikeyLogin);
      console.log(error);
      if (error.response) { // If a response has been received from the server
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
}

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Store containers list from backend. Each container has "id", "lat" and "lng"
      containers: [],
    };
    this.getData = getData.bind(this);
  }

  componentDidMount() {
    this.getData();
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
            { (containers.length > 0)
              ? containers.map(elem => (
                <Feature
                  key={elem.id}
                  coordinates={[elem.longitude, elem.latitude]}
                />))
              : null}
          </Layer>
        </Map>
      </MapComponent>
    );
  }
}

export default MapContainer;
