import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import Wrapper from './home/components/Wrapper';
import BodyWrapper from './home/components/BodyWrapper';
import MapView from './map/MapView';
import global from './home/css/global.css';

const App = () => (
  <Wrapper>
    <Header />
    <BodyWrapper>
      <MapView />
      <Footer />
    </BodyWrapper>
  </Wrapper>
);

export default App;
