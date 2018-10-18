import styled from 'styled-components';

const SubBoxTitle = styled.a`
  font-family: Candara;
  line-height: normal;
  font-size: 35px;
  text-align: center;

  color: #0797BA;

  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export default SubBoxTitle;
