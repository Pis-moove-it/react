import React from 'react';
import {
  scroller as scroll,
} from 'react-scroll';
import logo from '../assets/logoBlanco.png';
import {
  Box, SubBox, ReciclandoLogo, HeaderTitle,
} from '../styles/header';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'relative',
      animation: 'none',
      offset: (-110),
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
        offset: (-55),
      });
    } else if (window.scrollY < 200) {
      this.setState({
        position: 'relative',
        animation: 'none',
        offset: (-110),
      });
    }
  }

  render() {
    const props = {
      delay: 0, smooth: 'easeInOutQuart', duration: 1000, offset: (this.state.offset),
    };
    return (
      <Box position={this.state.position} transition={this.state.animation}>
        <ReciclandoLogo src={logo} />
        <SubBox>
          <HeaderTitle onClick={() => scroll.scrollTo('Map', props)}>
¿Dónde reciclo?
          </HeaderTitle>
          <HeaderTitle onClick={() => scroll.scrollTo('Trivia', props)}>
¿Sabías qué?
          </HeaderTitle>
          <HeaderTitle onClick={() => scroll.scrollTo('Info', props)}>
Mundo actual
          </HeaderTitle>
        </SubBox>
      </Box>
    );
  }
}

export default Header;
