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
      correct: 0,
      loading: true,
      okAns: 0,
      timeOut: false,
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
    // console.log(op)
    // console.log("la opcion correcta es:", correctOp)
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

    this.setState({
      timeOut: true
    })

    // console.log(correctOpN)
    // console.log(opN)

    if (op === correctOp){
      const newBackColors = this.state.backColor.slice() //copy the array
      newBackColors[opN] = '#2AAA36' //execute the manipulations
      this.setState( {
        backColor : newBackColors,
        correct: this.state.correct+1
       })
      // console.log("emboco")
    } else{
      const newBackColors = this.state.backColor.slice(0,3) //copy the array
      newBackColors[opN] = '#FD1F01' //execute the manipulations
      newBackColors[correctOpN] = '#2AAA36' 
      // console.log(newBackColors[opN])
      // console.log(newBackColors[correctOpN])
      this.setState({backColor : newBackColors})
      // console.log(this.state.backColor[opN])
      // console.log(this.state.backColor[correctOpN])
    }
      // Usage!
    this.sleep(2500).then(() => {
      this.resetBackColor()
      this.setState({
        timeOut: false
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
  }

  render() {

    const { questions } = this.state;
    const { timeOut } = this.state;
    const  actualQ  = questions.pop();
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
