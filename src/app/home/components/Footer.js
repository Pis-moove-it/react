import React from 'react';
import {
  Box, FooterText, LeafLogo, SubBox, Line, SubBoxTitle, SubBoxText, Logo, Link,
} from '../styles/footer';
import leafLogo from '../assets/icons8-natural-food-50.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const today = new Date();

const Footer = () => (
  <Box>
    <SubBox displayAlways>
      <FooterText>
        {'\u00A9 PIS, '}
        {today.getFullYear()}
      </FooterText>
    </SubBox>
    <SubBox>
      <SubBoxTitle>Abrojo</SubBoxTitle>
      <Line />
      <SubBoxText>
        <Logo src={phone} />
        (598) 2 903 0144 / 2 900 9123
        <br />
        <Logo src={mail} />
        <Link href="mailto:comunicacion@elabrojo.org.uy">comunicacion@elabrojo.org.uy</Link>
        <br />
        <Link href="www.elabrojo.org.uy">www.elabrojo.org.uy</Link>
      </SubBoxText>
    </SubBox>
    <SubBox>
      <SubBoxTitle>Intendencia de Rocha</SubBoxTitle>
      <Line />
      <SubBoxText>
        <Logo src={phone} />
        1955
        {(window.innerWidth > 425) ? <br /> : null}
        <Link href="www.rocha.gub.uy">www.rocha.gub.uy</Link>
        {(window.innerWidth > 425)
          ? <div><br /><br /></div>
          : null
        }
      </SubBoxText>
    </SubBox>
    <SubBox>
      <SubBoxTitle>Ayúdanos a mejorar el sitio</SubBoxTitle>
      <Line />
      <SubBoxText>
        <Logo src={mail} />
        <Link href="mailto:admin@example.com.uy">admin@example.com.uy</Link>
        {(window.innerWidth > 425)
          ? <div><br /><br /><br /></div>
          : null
        }
      </SubBoxText>
    </SubBox>
    <LeafLogo src={leafLogo} />
  </Box>);

export default Footer;
