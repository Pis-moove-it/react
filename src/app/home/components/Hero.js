import React from 'react';
import {
  scroller as scroll,
} from 'react-scroll';
import heroImage from '../assets/heroImage.jpg';
import arrowDown from '../assets/arrow-up.png';
import {
  HeroImage, HeroTitle, TextBox, PrimaryBox, GoToMap, Br, HeroSubTitle, SubTextBox, GoToMapLink,
} from '../styles/hero';

const Hero = () => (
  <PrimaryBox>
    <HeroImage src={heroImage} />
    <TextBox>
      <HeroTitle>
              Se parte del futuro de nuestro planeta.
        <Br />
               Dejanos guiarte en tu camino hacia el reciclaje.
      </HeroTitle>
    </TextBox>
    <HeroSubTitle>
      <SubTextBox>
              Presione para continuar
      </SubTextBox>
    </HeroSubTitle>
    <GoToMapLink onClick={() => scroll.scrollTo('Map', {
      delay: 0, smooth: 'easeInOutQuart', duration: 1000, offset: (-110),
    })}
    >
      <GoToMap src={arrowDown} />
    </GoToMapLink>
  </PrimaryBox>
);

export default Hero;
