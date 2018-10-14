import styled from 'styled-components';

const SubBoxText = styled.a`
  font-family: Candara;
  line-height: normal;
  font-size: 20px;

  color: #000000;

  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export default SubBoxText;
