import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';
import MultiTouch from 'mapbox-gl-multitouch';
import axios from 'axios';
import MapComponent from '../styles/MapComponent';
import trashLogo from '../assets/trash.png';
import InfoComponent from '../styles/InfoComponent';
import BoxComponent from '../styles/BoxComponent';
import BoxTitle from '../styles/BoxTitle';
import SubBoxTitle from '../styles/SubBoxTitle';
import BoxInfo from '../styles/BoxInfo';
import BoxLogo from '../styles/BoxLogo';
import SubBoxLogo from '../styles/SubBoxLogo';
import carton from '../assets/carton.png';
import BoxText from '../styles/BoxText';
import SubBoxText from '../styles/SubBoxText';
import paper from '../assets/paper.png';
import water from '../assets/water.png';
import QuestionTexBox from '../styles/QuestionTextBox';
import Question from '../styles/Question';
import QuestionContent from '../styles/QuestionContent';
import Text from '../styles/Text';
import TextContent from '../styles/TextContent';
import MapViewComponent from '../styles/MapViewComponent';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
});

const enableMobileScroll = (map) => {
  if (window.innerWidth <= 425) {
    map.addControl(new MultiTouch());
  }
};

// Used for rendering the trash and user icons (see Layer component below)
const trashIcon = new Image(40, 40);
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

// Set user coordinates taken from Geolocation API.
// This function is triggered when Geolocation is succesfull
function success(pos) {
  this.setState({
    user: [pos.coords.longitude, pos.coords.latitude],
  });
}

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      route: null, // The route to the selected container
      geolocation: new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      geolocationEnabled: false,
      // Store containers list from backend. Each container has "id", "lat" and "lng"
      containers: [],
      selectedId: 0,
      load: true,
      selectedLon: 0,
      selectedLat: 0,
      infoContainer: '',
    };
    const { geolocation } = this.state;

    // Update user state when location updates
    geolocation.on('geolocation', (data) => {
      this.setState({
        user: [data.coords.longitude, data.coords.latitude],
      });
    });
    // Set geolocationEnabled state to false when geolocation finishes
    geolocation.on('trackuserlocationend', () => {
      this.setState({
        geolocationEnabled: false,
      });
    });

    if (navigator.geolocation) { // Get user's location
      navigator.geolocation.getCurrentPosition(success.bind(this));
      this.getRoute = this.getRoute.bind(this);
    }
    this.getData = getData.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.showInfo(0);
  }

  // lan and lat are longitude and latitude of destination
  getRoute(lng, lat) {
    // Update user current location
    const { geolocation, geolocationEnabled } = this.state;
    // Check if geolocation is available in this device and browser
    if (navigator.geolocation) {
      // If geolocation button isn't currently activated
      if (!geolocationEnabled) {
        geolocation.trigger();
        this.setState({
          geolocationEnabled: true,
        });
        navigator.geolocation.getCurrentPosition(success.bind(this));
      }
      const { user } = this.state;
      const start = user;
      const end = [lng, lat];
      const type = 'walking';
      const apiCall = `${process.env.REACT_APP_MAPBOX_DIRECTIONS}mapbox/${type}/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;
      fetch(apiCall)
        .then(result => result.json())
        .then((data) => {
          if (data.routes) { // Only attempt to set route state if Mapbox API sent a response
            this.setState({
              route: data.routes[0].geometry.coordinates,
            });
          }
        });
    }
  }

  showInfo(id, lon, lat) {
    // axios.get(process.env.REACT_APP_CORS + process.env.REACT_APP_API_QUESTIONS)
    const path = '/info'.concat(id).concat('.json');
    axios.get(path).then((res) => {
      this.setState(
        {
          infoContainer: res.data,
          selectedId: id,
          selectedLon: lon,
          selectedLat: lat,
          load: false,
        },

      );
    })
      .catch((error) => {
        console.log(error);
        if (error.response) { // If a response has been received from the server
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  render() {
    const {
      route, geolocation, containers, infoContainer, load, selectedId, selectedLat, selectedLon,
    } = this.state;

    return (
      <MapViewComponent>
        <InfoComponent>
          <BoxComponent>
            <BoxTitle>
              <SubBoxTitle>
                En
                {' '}
                {infoContainer.location}
                , durante el mes de Agosto hemos reciclado
              </SubBoxTitle>
            </BoxTitle>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={carton} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                  {infoContainer.carton}
                  {' '}
                  kg de cartón
                </SubBoxText>
              </BoxText>
            </BoxInfo>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={paper} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                  {infoContainer.paper}
                  {' '}
                  kg de papel
                </SubBoxText>
              </BoxText>
            </BoxInfo>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={water} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                  {infoContainer.plastic}
                  {' '}
                  kg de plástico
                </SubBoxText>
              </BoxText>
            </BoxInfo>
          </BoxComponent>
          <QuestionTexBox>
            <Question>
              <QuestionContent>
                ¿Sabes cuánto se recicló en tu barrio?
              </QuestionContent>
            </Question>
            <Text>
              <TextContent>
                Presiona sobre la isla para más información
              </TextContent>
            </Text>
          </QuestionTexBox>
        </InfoComponent>
        <MapComponent>
          <Map
        // style prop is required by React Mapbox
            style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
            center={load ? [-56.165293, -34.889631] : null}
            zoom={load ? [11.5] : null}
            onStyleLoad={
          (map) => {
            // Add button to detect user's current location
            map.addControl(geolocation);
            geolocation.on('geolocate', (e) => {
              map.flyTo({
                center: [e.coords.longitude, e.coords.latitude],
                zoom: 11.5,
              });
            });
            map.addControl(new mapboxgl.NavigationControl());
            enableMobileScroll(map);
            map.addControl(new mapboxgl.FullscreenControl());
            map.addControl(new mapboxgl.ScaleControl());

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'trashes', () => {
              map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'trashes', () => {
              map.getCanvas().style.cursor = '';
            });
          }
        }
          >
            <Layer
              // Layer with trashes
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
                    onClick={() => {
                      this.showInfo(elem.id, elem.longitude, elem.latitude);
                      this.getRoute(elem.longitude, elem.latitude);
                    }}
                  />))
                : null}
            </Layer>
            { (containers.length > 0 && selectedId !== 0)
              ? (
                <Popup
                  key={selectedId}
                  coordinates={[selectedLon, selectedLat]}
                >
                  <SubBoxText>{infoContainer.location}</SubBoxText>
                </Popup>
              ) : null}
            { route && (
              <Layer // Layer with the route
                type="line"
                id="route"
                layout={{ 'line-cap': 'round', 'line-join': 'round' }}
                paint={{ 'line-color': '#4790E5', 'line-width': 8 }}
              >
                <Feature coordinates={route} />
              </Layer>
            ) }
          </Map>
        </MapComponent>
      </MapViewComponent>
    );
  }
}

export default MapContainer;
