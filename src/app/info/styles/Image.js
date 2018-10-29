import styled from 'styled-components';

const Image = styled.img`  
  width: ${props => props.width};
  height: ${props => props.height};
  src: ${props => props.src};

  margin: 1%;

  flex: 1;
`;

export default Image;
