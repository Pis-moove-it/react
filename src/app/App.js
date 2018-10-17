import React from 'react';
import Footer from './home/components/Footer';
import Header from './home/components/Header';
import Trivia from './trivia/components/Trivia';
import global from './home/css/global.css';


const App = () => (
  <div>
    <Header />
    <Trivia />
    <Footer />
  </div>
);

export default App;
