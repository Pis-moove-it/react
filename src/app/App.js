import React from 'react';
import { Element } from 'react-scroll';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import MapView from './map/components/MapView';
import global from './home/css/global.css'; // eslint-disable-line
import Trivia from './trivia/components/Trivia';
import BackToTop from './home/components/BackToTop';
import BodyWrapper from './home/styles/BodyWrapper';
import Hero from './home/components/Hero';

const App = () => (
  <div>
    <Header />
    <Hero />
    <BackToTop />
    <BodyWrapper>
      <Element id="Map" />
      <MapView />
      <Trivia />
      <Footer />
    </BodyWrapper>
  </div>
);

export default App;
