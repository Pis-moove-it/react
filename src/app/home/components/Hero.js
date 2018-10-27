import React from 'react';
import heroImage from '../assets/heroImage.jpg';
import arrowDown from '../assets/arrow-up.png';
import {
  HeroImage, HeroTitle, TextBox, PrimaryBox, GoToMap, Br, HeroSubTitle, SubTextBox
} from '../styles/hero';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
  }

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
        <GoToMap src={arrowDown}/>
      </PrimaryBox>
    );
  }
}

export default Hero;
