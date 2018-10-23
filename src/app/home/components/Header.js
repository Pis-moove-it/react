import React from 'react';
import logo from '../assets/logoBlanco.png';
import leafLogo from '../assets/icons8-natural-food-50.png';
import {
  Box, SubBox, ReciclandoLogo, LeafLogo, HeaderTitle,
} from '../styles/header';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'relative',
      animation: 'none',
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
    if (window.scrollY > 200) {
      this.setState({
        position: 'fixed',
        animation: 'fadeStickyIn .6s ease-in-out forwards',
      });
    } else if (window.scrollY < 200) {
      this.setState({
        position: 'relative',
        animation: 'none',
      });
    }
  }

  render() {
    return (
      <Box position={this.state.position} transition={this.state.animation}>
        <ReciclandoLogo src={logo} />
        <SubBox>
          <HeaderTitle>¿Dónde reciclo?</HeaderTitle>
          <HeaderTitle>¿Qué reciclo?</HeaderTitle>
          <HeaderTitle>¿Sabías qué?</HeaderTitle>
        </SubBox>
        <LeafLogo src={leafLogo} />
      </Box>
    );
  }
}

export default Header;
