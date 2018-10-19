import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import BodyWrapper from './home/styles/BodyWrapper';
import MapView from './map/MapView';
import global from './home/css/global.css'; // eslint-disable-line

const App = () => (
  <div>
    <Header />
    <BodyWrapper>
      <MapView />
      <Footer />
    </BodyWrapper>
  </div>
);

export default App;
