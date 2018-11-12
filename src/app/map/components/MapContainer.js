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
import ToggleMenu from '../styles/ToggleMenu';

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

function Toggle() {
  this.setState(
    {
      showMenu: !this.state.showMenu,
    },
  );
}

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Store containers list from backend. Each container has "id", "lat" and "lng"
      containers: [],
      selectedId: 0,
      load: true,
      selectedLon: 0,
      selectedLat: 0,
      infoContainer: '',
      showMenu: true,
    };
    this.getData = getData.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.Toggle = Toggle.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.showInfo(0);
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
      containers, infoContainer, load, selectedId, selectedLat, selectedLon, showMenu,
    } = this.state;

    return (
      <MapViewComponent>
        <InfoComponent showMenu={showMenu}>
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
        <ToggleMenu moveLeft={showMenu} onClick={this.Toggle} />
        <MapComponent>
          <Map
        // style prop is required by React Mapbox
            style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
            center={load ? [-56.165293, -34.919999] : null}
            zoom={load ? [13.5] : null}
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
                    onClick={() => this.showInfo(elem.id, elem.longitude, elem.latitude)}
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
          </Map>
        </MapComponent>
      </MapViewComponent>
    );
  }
}

export default MapContainer;
