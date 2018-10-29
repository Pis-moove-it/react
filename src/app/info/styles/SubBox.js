import styled from 'styled-components';

const SubBox = styled.div`
  width: -webkit-fill-available;
  
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 4;
  padding-bottom: 10%;

  @media (max-width: 376px) {
      flex: 7;
  }
`;

export default SubBox;
