import styled from 'styled-components';

const SubBox = styled.div`
  width: -webkit-fill-available;
  height: 80vh;
  margin-top: -5%;
  margin-bottom: 5%;

  display: flex;
  align-items: center;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
`;

export default SubBox;
