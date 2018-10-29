import React from 'react';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox, BoxOption,
} from '../styles/trivia';


const Trivia = () => (
  <Box>
    <TitleBox>
      <Title>¿Cuánto conocés?</Title>
      <Triangle />
    </TitleBox>
    <SubBox>
      <Question>¿Cuánto tarda en degradarse una botella?</Question>
      <BoxOption>
        <Option>10 años</Option>
      </BoxOption>
      <BoxOption>
        <Option>500 años</Option>
      </BoxOption>
      <BoxOption>
        <Option>100 años</Option>
      </BoxOption>
      <BoxOption>
        <Option>700 años</Option>
      </BoxOption>
    </SubBox>
  </Box>
);

export default Trivia;
