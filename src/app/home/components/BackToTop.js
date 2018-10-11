import React from 'react';
import arrowUp from '../assets/arrow-up.png'
import { BackIcon, BackLink} from '../styles/backtotop';

const BackToTop = () => (
  <BackLink href="#top">
      <BackIcon src={arrowUp}/>
  </BackLink>
);

export default BackToTop;
