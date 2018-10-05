import React from 'react';
import { hot } from 'react-hot-loader';
import logo from '../assets/logoBlanco.png';
import leafLogo from '../assets/icons8-natural-food-50.png';
import {
  Box, SubBox, ReciclandoLogo, LeafLogo, HeaderTitle,
} from '../styles/header';


const Header = () => (
  <Box>
    <ReciclandoLogo src={logo} />
    <SubBox>
      <HeaderTitle>¿Dónde reciclo?</HeaderTitle>
      <HeaderTitle>¿Qué reciclo?</HeaderTitle>
      <HeaderTitle>¿Sabías qué?</HeaderTitle>
    </SubBox>
    <LeafLogo src={leafLogo} />
  </Box>
);

export default hot(module)(Header);
