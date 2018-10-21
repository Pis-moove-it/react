import styled from 'styled-components';

const SubBoxText = styled.a`
  font-family: Candara;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;

  color: #000000;

  position: relative;
  float: left;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);

  @media(max-width: 1024px) {
    left: 55%;
    font-size: 15px;
  }

    @media(max-width: 425px) {
    left: 35%;
    font-size: 10px;
  }
`;

export default SubBoxText;
