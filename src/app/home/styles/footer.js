import styled from 'styled-components';

export const Box = styled.header`
  position: fixed;
  left: 0;
  bottom: 0;
  width: -webkit-fill-available;
  background: #0797BA;
  color: #FFFFFF;
  font-family: "Candara";
  font-weight: bold;
  padding: 15px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 767px) {
        display: none;
  }
  flex: 10;
  `;

export const FooterText = styled.a`
    padding-left: 40px;
    color: #FFFFFF;
    text-decoration: none;
`;
