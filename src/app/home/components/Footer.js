import React from 'react';
import { Box, FooterText, LeafLogo } from '../styles/footer';
import leafLogo from '../assets/icons8-natural-food-50.png';

const today = new Date();

const Footer = () => (
  <Box>
    <FooterText>
      {'\u00A9 PIS, '}
      {today.getFullYear()}
    </FooterText>
    <LeafLogo src={leafLogo} />
  </Box>);

export default Footer;
