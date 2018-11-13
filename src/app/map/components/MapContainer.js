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
  const apikeyLogin = null;
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
      this.setState({
        apiKey: apikey,
      });
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
        ApiKey: this.state.apiKey,
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

  await axios.post(
    process.env.REACT_APP_CORS + process.env.REACT_APP_API_ORGANIZATION_INFO,
    { month: 8 },
    {
      headers: {
        ApiKey: this.state.apiKey,
      },
    },
  )
    .then((res) => {
      this.setState({
        infoContainer: res.data,
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
      organization: [],
      selectedId: 0,
      load: true,
      selectedLon: 0,
      selectedLat: 0,
      infoContainer: '',
      apiKey: '',
      selectedDescription: '',
    };
    this.getData = getData.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  showInfo(id, lon, lat, descr) {
    axios.get(`${process.env.REACT_APP_CORS + process.env.REACT_APP_API_CONTAINERS}/${id}`,
      {
        headers: {
          deviceIdHeader: 'prueba',
          deviceTypeHeader: 'prueba',
          'Content-Type': 'application/json',
          ApiKey: this.state.apiKey,
        },
      }).then((res) => {
      this.setState(
        {
          infoContainer: res.data,
          selectedId: id,
          selectedLon: lon,
          selectedLat: lat,
          selectedDescription: descr,
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
      containers, infoContainer, load, selectedId, selectedLat, selectedLon, selectedDescription,
    } = this.state;

    return (
      <MapViewComponent>
        <InfoComponent>
          <BoxComponent>
            <BoxTitle>
              <SubBoxTitle>
                            En
                {' '}
                {(selectedDescription === '') ? infoContainer.organization : selectedDescription}
, durante el mes de Agosto hemos reciclado
              </SubBoxTitle>
            </BoxTitle>
            <BoxInfo>
              <BoxLogo>
                <SubBoxLogo src={carton} />
              </BoxLogo>
              <BoxText>
                <SubBoxText>
                  {infoContainer.kg_trash}
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
                  {(infoContainer.kg_recycled_glass === undefined) ? infoContainer.kg_glass : infoContainer.kg_recycled_glass}
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
                  {(infoContainer.kg_recycled_plastic === undefined) ? infoContainer.kg_plastic : infoContainer.kg_recycled_plastic}
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
                    onClick={() => this.showInfo(elem.id, elem.longitude, elem.latitude, elem.description)}
                  />))
                : null}
            </Layer>
            { (containers.length > 0 && selectedId !== 0)
              ? (
                <Popup
                  key={selectedId}
                  coordinates={[selectedLon, selectedLat]}
                >
                  <SubBoxText>{selectedDescription}</SubBoxText>
                </Popup>
              ) : null}
          </Map>
        </MapComponent>
      </MapViewComponent>
    );
  }
}

export default MapContainer;
