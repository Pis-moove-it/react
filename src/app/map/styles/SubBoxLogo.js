import styled from 'styled-components';

const SubBoxLogo = styled.img`
  height: 37px;
  width: auto;
  padding-right: 8%;

  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
  height: 17px;
  }
`;

export default SubBoxLogo;
