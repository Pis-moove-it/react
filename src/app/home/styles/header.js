import styled from 'styled-components';

export const Box = styled.header`
    position: fixed;
    top: 0;
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
    `;

export const SubBox = styled.div`
  @media (max-width: 767px) {
        display: none;
  }
  flex: 10;
`;

export const ReciclandoLogo = styled.img`
    height: 25px;
    width: auto;
    padding-right: 20px;
`;

export const LeafLogo = styled.img`
    height: 20px;
    width: 20px;
`;

export const HeaderTitle = styled.a`
    padding-left: 40px;
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: #dfedf3;
    }
`;