import React from 'react';
import {
  animateScroll as scroll,
} from 'react-scroll';
import heroImage from '../assets/heroImage.jpg';
import arrowDown from '../assets/arrow-up.png';
import {
  HeroImage, HeroTitle, TextBox, PrimaryBox, GoToMap, Br, HeroSubTitle, SubTextBox, GoToMapLink,
} from '../styles/hero';

class Hero extends React.Component {
  render() {
    return (
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
        <GoToMapLink onClick={() => scroll.scrollTo(540)}>
          <GoToMap src={arrowDown} />
        </GoToMapLink>
      </PrimaryBox>
    );
  }
}

export default Hero;
