import React from 'react';
import MapViewComponent from './styles/MapViewComponent';
import InfoComponent from './styles/InfoComponent';
import MapComponent from '../home/components/MapComponent';
import MapContainer from '../home/components/MapContainer';
import BoxComponent from './styles/BoxComponent';
import Question from './styles/Question';
import Text from './styles/Text';
import BoxTitle from './styles/BoxTitle';
import BoxInfo from './styles/BoxInfo';
import Logo from './styles/Logo';
import BoxText from './styles/BoxText';
import carton from './assets/carton.png';
import paper from './assets/paper.png';
import water from './assets/water.png';

const MapView = () => (
  <MapViewComponent>
    <InfoComponent>
      <BoxComponent>
        <BoxTitle>
          En Agosto hemos reciclado
        </BoxTitle>
        <BoxInfo>
          <Logo src={carton} />
          <BoxText>
            10.582 kg de cartón
          </BoxText>
        </BoxInfo>
        <BoxInfo>
          <Logo src={paper} />
          <BoxText>
            2.303 kg de papel
          </BoxText>
        </BoxInfo>
        <BoxInfo>
          <Logo src={water} />
          <BoxText>
            5.273 kg de plástico
          </BoxText>
        </BoxInfo>
      </BoxComponent>
      <Question>
        ¿Sabes cuánto se reciclón en tu barrio?
      </Question>
      <Text>
        Presiona sobre la isla para más información
      </Text>
    </InfoComponent>
    <MapComponent>
      <MapContainer />
    </MapComponent>
  </MapViewComponent>
);

export default MapView;
