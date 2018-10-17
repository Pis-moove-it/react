import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapContainer from './home/components/MapContainer';
import BodyWrapper from './home/components/BodyWrapper';
import global from './home/css/global.css';

const App = () => (
  <div>
    <Header />
    <BodyWrapper>
      <MapContainer />
      <Footer />
    </BodyWrapper>
  </div>
);

export default App;
