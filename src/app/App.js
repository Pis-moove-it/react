import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapContainer from './home/components/MapContainer';
import Wrapper from './home/components/Wrapper';
import global from './home/css/global.css';

const App = () => (
  <Wrapper>
    <Header />
    <MapContainer />
    <Footer />
  </Wrapper>
);

export default App;
