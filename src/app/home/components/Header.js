import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import logo from '../assets/logoBlanco.png';
import leafLogo from '../assets/icons8-natural-food-50.png';
import { Box, SubBox, ReciclandoLogo, LeafLogo, HeaderTitle} from '../styles/header';


const Header = () => (
  <Box>
    <ReciclandoLogo src={logo} className="logo-reciclando" />
    <SubBox>
      <HeaderTitle href="#">¿Dónde reciclo?</HeaderTitle>
      <HeaderTitle href="#">¿Qué reciclo?</HeaderTitle>
      <HeaderTitle href="#">¿Sabías qué?</HeaderTitle>
    </SubBox>
    <LeafLogo className="logo-leaf" src={leafLogo} />
  </Box>
);

export default hot(module)(Header);
