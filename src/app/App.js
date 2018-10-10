import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapContainer from './home/components/MapContainer';
import global from './home/css/global.css';

const App = () => (
  <div>
    <Header />
    <MapContainer />
    <Footer />
  </div>
);

export default App;
