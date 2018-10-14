import styled from 'styled-components';

const TextContent = styled.a`
  font-family: Candara;
  line-height: normal;
  font-size: 18px;

  text-align: center;

  color: #000000;

  flex: 1;

  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    font-size: 11px;
  }
`;

export default TextContent;
