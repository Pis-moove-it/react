import styled from 'styled-components';

const InfoComponent = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  
  z-index: 0;
  
  flex: 1;
  
  height: calc(100vh - 55px); /* all vertical height minus header */
  background: #E5E5E5;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    flex: 2;
  }
`;

export default InfoComponent;
