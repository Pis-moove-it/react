import React, {Component} from 'react';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox, BoxOption,
} from '../styles/trivia';
import axios from 'axios';

class Trivia extends Component {

  
  constructor() {
    super();
    this.state = {
      questions: [],
      correct: 0
    };

  }

  componentDidMount() {
    axios.get('http://34.213.11.120/questions')
      .then( ({data}) => {
        this.setState(
          { questions : data }
        );
        console.log(this.state.questions.pop().question)
        console.log(this.state.questions.pop().question)
        //console.log(this.state.questions.pop().question)
      })
      .catch((err) => {})
  }



render(){
return (
  <Box>  
    <TitleBox>
      <Title>¿Cuánto conocés?</Title>
      <Triangle />
    </TitleBox>
    <SubBox>
      <Question></Question>
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
}

}
export default Trivia;
