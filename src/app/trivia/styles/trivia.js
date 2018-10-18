import styled from 'styled-components';
import cityPicture from '../assets/landing50.png'

export const Box = styled.div`
    font-family: "Candara";
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90vh;
`;

export const Title = styled.a`
    width: -webkit-fill-available;
    height: auto;
    @media (max-width: 768px) {
        font-size: 36px;
    }
    @media (max-width: 376px) {
        font-size: 26px;
    }
    text-align: center;
    font-size: 40px;
    color: #067995;
    flex: 1;
`;

export const TitleBox = styled.div`
    flex:1
    display: flex;
    flex-direction: column;
`;

export const SubBox = styled.div`
    width: -webkit-fill-available;
    background-image: url(${cityPicture});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 4;
    padding-bottom: 10%;

    @media (max-width: 376px) {
        flex: 7;
    }
    
`;
export const BoxQuestion = styled.div`
    flex: 7;
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;


export const Question = styled.a`
    @media (max-width: 768px) {
        font-size: 23px;
        width: 50%;
    }
    @media (max-width: 376px) {
        font-size: 16px;
        width: 66%;
        margin: 10px;
    }

    width: 30%;
    margin: 1%;

    text-align: center;
    align-items: center;
    font-size: 28px;
    color: #067995;

    background: #FFFFFF;
    border: 2px solid rgba(196, 196, 196, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const Option = styled.a`
    @media (max-width: 768px) {
        font-size: 23px;
        line-height: 2.5;
        width: 50%;
    }
    @media (max-width: 376px) {
        font-size: 16px;
        width: 66%;
        line-height: 3.2;
        margin: 16px;
        flex: 4;
    }
    flex: 6;


    width: 30%;
    margin: 1%;
    text-align: center;
    line-height: 2;
    font-size: 28px;
    align-items: center;
    vertical-align: middle;
    color: #067995;

    background: #FFFFFF;
    border: 2px solid rgba(196, 196, 196, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Triangle = styled.div `    
    @media (max-width: 768px) {
        border-left: 150px solid transparent; 
        border-right: 150px solid transparent; 
        border-top: 7px solid rgba(196, 196, 196, 0.7);
    }
    @media (max-width: 376px) {
        border-left: 100px solid transparent; 
        border-right: 100px solid transparent; 
        border-top: 6px solid rgba(196, 196, 196, 0.7);
        flex: 2;
    }

    width: 0; 
    height: 0; 
    border-left: 180px solid transparent; 
    border-right: 180px solid transparent; 
    border-top: 8px solid rgba(196, 196, 196, 0.7);
    flex: 1;
`;

export const CityPicture = styled.img`
    position: absolute;
    width: 100%;
    max-width: 950px;
    opacity: 0.3;
    z-index: 0;
`;