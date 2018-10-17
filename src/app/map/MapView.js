import React from 'react';
import MapViewComponent from './styles/MapViewComponent';
import InfoComponent from './styles/InfoComponent';
import MapComponent from './styles/MapComponent';
import MapContainer from './components/MapContainer';
import BoxComponent from './styles/BoxComponent';
import Question from './styles/Question';
import QuestionContent from './styles/QuestionContent';
import Text from './styles/Text';
import TextContent from './styles/TextContent';
import BoxTitle from './styles/BoxTitle';
import SubBoxTitle from './styles/SubBoxTitle';
import BoxInfo from './styles/BoxInfo';
import BoxLogo from './styles/BoxLogo';
import SubBoxLogo from './styles/SubBoxLogo';
import BoxText from './styles/BoxText';
import SubBoxText from './styles/SubBoxText';
import carton from './assets/carton.png';
import paper from './assets/paper.png';
import water from './assets/water.png';

const MapView = () => (
  <MapViewComponent>
    <InfoComponent>
      <BoxComponent>
        <BoxTitle>
          <SubBoxTitle>
            En Agosto hemos reciclado
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
    </InfoComponent>
    <MapComponent>
      <MapContainer />
    </MapComponent>
  </MapViewComponent>
);

export default MapView;
