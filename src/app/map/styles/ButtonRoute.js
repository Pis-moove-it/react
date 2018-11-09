import styled from 'styled-components';

const ButtonRoute = styled.button`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-color: greenyellow;

  flex: 1;

  border-radius: 15px;
  border: ${props => (props.selected ? 'inset' : 'outset')};
  :focus {
    outline: 0;
  }
  background-color: ${props => (props.selected ? 'skyblue' : 'greenyellow')};
  :hover {
    background-color: skyblue;
  }
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export default ButtonRoute;
