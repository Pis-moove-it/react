import styled from 'styled-components';

const MapView = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 0;
  flex: 1;
  height: calc(100vh - 55px); /* all vertical height minus header */
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export default MapView;
