import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {
  Box, Title, SubBox, Option, Question, Triangle, TitleBox, BoxOption, BoxQuestion, CorrectText,
} from '../styles/trivia';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      index: 0,
      correct: 0,
      loading: true,
      opacity: 1,
      showCorrect: 'hidden',
      correctColor: '',
      backColor: [null, null, null, null],

    };
    this.optionClicked = this.optionClicked.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }


  getQuestions() {
    this.setState({ loading: true });
    axios.get(process.env.REACT_APP_CORS + process.env.REACT_APP_API_QUESTIONS)
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
    const {
      backColor, showCorrect,
    } = this.state;
    if (showCorrect === 'hidden') {
      let opN = 0;
      let correctOpN = 0;
      switch (op) {
        case 'A': opN = 0;
          break;
        case 'B': opN = 1;
          break;
        case 'C': opN = 2;
          break;
        case 'D': opN = 3;
          break;
        default:
          break;
      }

      switch (correctOp) {
        case 'A': correctOpN = 0;
          break;
        case 'B': correctOpN = 1;
          break;
        case 'C': correctOpN = 2;
          break;
        case 'D': correctOpN = 3;
          break;
        default:
          break;
      }

      const newBackColors = backColor.slice();
      if (op === correctOp) {
        newBackColors[opN] = '#2AAA36';
        this.setState({
          correct: this.state.correct + 1,
          textCorrect: 'CORRECTO',
          correctColor: '#2AAA36',
        });
      } else {
        newBackColors[opN] = '#FD1F01';
        newBackColors[correctOpN] = '#2AAA36';
        this.setState({
          textCorrect: 'INCORRECTO',
          correctColor: '#FD1F01',
        });
      }
      this.setState({
        backColor: newBackColors,
        opacity: 0.2,
        showCorrect: 'visible',
      });
      sleep(1500).then(() => {
        this.resetBackColor();
        this.setState({
          index: this.state.index + 1,
        });
      });
    }
  }

  resetBackColor() {
    const { index } = this.state;
    this.setState({
      backColor: [null, null, null, null],
      answered: false,
      showCorrect: 'hidden',
      opacity: 1,
    });
    if (index === 5) {
      this.getQuestions();
      this.setState({
        index: -1,
      });
    }
  }

  render() {
    const {
      questions, index, loading, showCorrect, opacity, textCorrect, correctColor, backColor,
    } = this.state;
    const actualQ = questions[index];

    if (!loading) {
      return (
        <Box>
          <TitleBox>
            <Title>¿Cuánto conocés?</Title>
            <Triangle />
          </TitleBox>
          <SubBox>
            <BoxQuestion>
              <Question opacity={opacity}>{actualQ.question}</Question>
              <CorrectText show={showCorrect} colorText={correctColor}>{textCorrect}</CorrectText>
            </BoxQuestion>
            <BoxOption>
              <Option onClick={() => this.optionClicked('A', actualQ.correct_option, this.state)} correctOption={backColor[0]} style={{ cursor: 'pointer' }}>{actualQ.option_a}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={() => this.optionClicked('B', actualQ.correct_option, this.state)} correctOption={backColor[1]} style={{ cursor: 'pointer' }}>{actualQ.option_b}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={() => this.optionClicked('C', actualQ.correct_option, this.state)} correctOption={backColor[2]} style={{ cursor: 'pointer' }}>{actualQ.option_c}</Option>
            </BoxOption>
            <BoxOption>
              <Option onClick={() => this.optionClicked('D', actualQ.correct_option, this.state)} correctOption={backColor[3]} style={{ cursor: 'pointer' }}>{actualQ.option_d}</Option>
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
