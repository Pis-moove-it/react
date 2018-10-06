import React from 'react';
import { Box, FooterText } from '../styles/footer';

const today = new Date();

const Footer = () => (
  <Box>
    <FooterText>
      {'\u00A9 PIS '}
      {today.getFullYear()}
    </FooterText>
  </Box>);

export default Footer;
