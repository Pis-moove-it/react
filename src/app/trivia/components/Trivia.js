import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox, BoxOption,
} from '../styles/trivia';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      index: 0,
      correct: 0,
      loading: true,
      backColor: [null, null, null, null],

    };
    this.optionClicked = this.optionClicked.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }



  getQuestions() {
    this.setState({ loading: true });
    axios.get(process.env.REACT_APP_API_QUESTIONS)
      .then(({ data }) => {
        this.setState(
          {
            questions: data,
            loading: false,
          },
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response) { // If a response has been received from the server
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  

  optionClicked(op, correctOp) {
    var opN = 0
    var correctOpN = 0
    switch(op) {
      case 'A' : opN = 0
        break;
      case 'B' : opN = 1
        break;
      case 'C' : opN = 2
        break;
      case 'D' : opN = 3
        break;
    }

    switch(correctOp) {
      case 'A' : correctOpN = 0
        break;
      case 'B' : correctOpN = 1
        break;
      case 'C' : correctOpN = 2
        break;
      case 'D' : correctOpN = 3
        break;
    }


    if (op === correctOp){
      const newBackColors = this.state.backColor.slice() 
      newBackColors[opN] = '#2AAA36' 
      this.setState( {
        backColor : newBackColors,
        correct: this.state.correct+1
       })

    } else{
      const newBackColors = this.state.backColor.slice(0,3) 
      newBackColors[opN] = '#FD1F01' 
      newBackColors[correctOpN] = '#2AAA36' 
      this.setState({backColor : newBackColors})
    }
    this.sleep(1500).then(() => {
      this.resetBackColor()
      this.setState({
        index: this.state.index+1
      })
    })
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  


  resetBackColor(){
    this.setState({
      backColor : [null, null, null, null],
    })
    if (this.state.index === 5){
      this.getQuestions()
      this.setState({
        index: 0
      })
    }
  }

  render() {

    const { questions } = this.state;
    const { index } = this.state;
    const  actualQ  = questions[index];
    const { loading } = this.state;


    if (!loading) {
      return (
        <Box>
          <TitleBox>
            <Title>¿Cuánto conocés?</Title>
            <Triangle />
          </TitleBox>
          <SubBox>
            <Question>{actualQ.question}</Question>
            <BoxOption>
              <Option onClick={()=>this.optionClicked("A", actualQ.correct_option, this.state)} correctOption= {this.state.backColor[0]}>{actualQ.option_a}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={()=>this.optionClicked("B", actualQ.correct_option, this.state)} correctOption= {this.state.backColor[1]}>{actualQ.option_b}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={()=>this.optionClicked("C", actualQ.correct_option, this.state)} correctOption= {this.state.backColor[2]}>{actualQ.option_c}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={()=>this.optionClicked("D", actualQ.correct_option, this.state)} correctOption= {this.state.backColor[3]}>{actualQ.option_d}</Option>
            </BoxOption>
          </SubBox>
        </Box>
      );
    } return (
      <Box>
        <TitleBox>
          <Title>¿Cuánto conocés?</Title>
          <Triangle />
        </TitleBox>
        <SubBox>
          <ReactLoading type="spin" color="#067995" height="5%" width="5%" />
        </SubBox>
      </Box>
    );
  }
}
export default Trivia;
