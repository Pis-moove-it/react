import styled from 'styled-components';

export const PrimaryBox = styled.div`
    position: relative;
    text-align: center;
    color: white;
`;

export const HeroImage = styled.img`
    max-height: 92vh;
    height: auto;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
`;

export const TextBox = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    width: 50vw;
    transform: translate(-50%, -50%);
`;

export const HeroTitle = styled.h2`
    font-size: 30px;
    font-family: Candara;
    background: rgba(0, 0, 0, 0.6);
`;

export const SubTextBox = styled.div`
    position: absolute;
    top: 75%;
    left: 50%;
    width: 30%;
    transform: translate(-50%, -50%);
`;

export const HeroSubTitle = styled.h2`
    font-size: 20px;
    font-family: Candara,serif;
    font-weight: bolder;
    text-shadow: 1px 1px #000;
`;

export const GoToMap = styled.img`
    position: absolute;
    top: 80%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
`;

export const Br = styled.br`
`;
