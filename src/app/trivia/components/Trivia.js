import React, {Component} from 'react';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox, BoxOption,
} from '../styles/trivia';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Trivia extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      correct: 0,
      loading: true
    };

  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions() {
    this.setState({loading : true})
    axios.get('http://34.213.11.120/questions')
      .then( ({data}) => {
        this.setState(
          { questions : data,
          loading: false }

        );
        console.log(this.state.questions.pop())
      })
      .catch((err) => {})
  }




render(){
  const actualQ = this.state.questions.pop()
  if(!this.state.loading ){ 
    return (
      <Box>  
        <TitleBox>
          <Title>¿Cuánto conocés?</Title>
          <Triangle />
        </TitleBox>
        <SubBox>
          <Question>{actualQ.question}</Question>
          <BoxOption>
            <Option>{actualQ.option_a}</Option>
          </BoxOption>    
          <BoxOption>
            <Option>{actualQ.option_b}</Option>
          </BoxOption>   
          <BoxOption>
            <Option>{actualQ.option_c}</Option>
          </BoxOption> 
          <BoxOption>
            <Option>{actualQ.option_d}</Option>
          </BoxOption> 
        </SubBox>
      </Box>
    );
    } else return(
      <Box>  
        <TitleBox>
          <Title>¿Cuánto conocés?</Title>
          <Triangle />
        </TitleBox>
        <SubBox>
          <ReactLoading type='spin' color='#067995' height='5%' width='5%' />
        </SubBox>
      </Box>
    )
}

}
export default Trivia;
