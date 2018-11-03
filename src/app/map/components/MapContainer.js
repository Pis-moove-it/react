import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
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
import global from '../../home/css/global.css';

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
      <MapViewComponent>
        <InfoComponent>
          <BoxComponent>
            <BoxTitle>
              <SubBoxTitle>
                            En Rocha, durante el mes de Agosto hemos reciclado
              </SubBoxTitle>
            </BoxTitle>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={carton} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                                10.582 kg de cartón
                </SubBoxText>
              </BoxText>
            </BoxInfo>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={paper} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                                2.303 kg de papel
                </SubBoxText>
              </BoxText>
            </BoxInfo>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={water} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                                5.273 kg de plástico
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
            <Layer
              className="click" // Layer with trashes
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
      </MapViewComponent>
    );
  }
}

export default MapContainer;
