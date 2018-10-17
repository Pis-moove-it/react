import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import BodyWrapper from './home/components/BodyWrapper';
import MapView from './map/MapView';
import global from './home/css/global.css';

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
