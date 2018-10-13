import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapContainer from './home/components/MapContainer';
import Wrapper from './home/components/Wrapper';
import BodyWrapper from './home/components/BodyWrapper';
import global from './home/css/global.css'; //eslint-disable-line

const App = () => (
  <Wrapper>
    <Header />
    <BodyWrapper>
      <MapContainer />
      <Footer />
    </BodyWrapper>
  </Wrapper>
);

export default App;
