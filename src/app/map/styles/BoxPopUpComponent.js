import styled from 'styled-components';

const BoxPopUpComponent = styled.div`
  background: #F4F4F4;
  border: 2px solid rgba(196, 196, 196, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 8% 6%;

  padding: 5% 2.5%;

  flex: 6;

  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    height: auto;
    padding: 5px;
    margin: 10px;
    justify-content: space-between;
  }
`;

export default BoxPopUpComponent;
