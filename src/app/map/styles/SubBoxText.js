import styled from 'styled-components';

const SubBoxText = styled.a`
  font-family: Candara;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;

  color: #000000;

  position: relative;
  float: initial;
  top: 35%;
  left: 5%;
  transform: translate(-50%, -50%);

  @media(max-width: 1024px) {
    font-size: 15px;
  }

    @media(max-width: 425px) {
    font-size: 10px;
    top: 15%;
  }
`;

export default SubBoxText;
