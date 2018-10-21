import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapView from './map/MapView';
import global from './home/css/global.css'; // eslint-disable-line
import Trivia from './trivia/components/Trivia';
import BackToTop from './home/components/BackToTop';
import BodyWrapper from './home/styles/BodyWrapper';

const App = () => (
  <div>
    <Header />
    <BackToTop />
    <BodyWrapper>
      <MapView />
      <Trivia />
      <Footer />
    </BodyWrapper>
  </div>
);

export default App;
