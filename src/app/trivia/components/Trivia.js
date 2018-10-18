import React from 'react';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox
} from '../styles/trivia';


const Trivia = () => (
  <Box>
    <TitleBox>
      <Title>¿Cuánto conocés?</Title>
      <Triangle />
    </TitleBox>
    <SubBox>
      <Question>¿Cuánto tarda en degradarse una botella?</Question>
      <Option>10 años</Option>
      <Option>500 años</Option>
      <Option>10 años</Option>
      <Option>500 años</Option>
    </SubBox>
  </Box>
);

export default Trivia;
