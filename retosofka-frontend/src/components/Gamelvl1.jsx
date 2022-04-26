import styled from 'styled-components';
import React, { useState, useContext, useEffect } from "react";
import Button from '@material-ui/core/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const Swal = require('sweetalert2')

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/vector-gratis/personas-planas-organicas-haciendo-preguntas_23-2148896826.jpg?t=st=1650933710~exp=1650934310~hmac=de9417b7609972e91ad6aa5b50a5396581d58b1b6775568fc0e50b56dae88551&w=826")
      center;
  background-size: cover;

`;
const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: light white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ButtonSide = styled.div`
padding: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  padding: 30px;
`;
const Select = styled.select`
  padding: 1px;
  margin-right: 40px;
  border-radius: 10px;
  border-color: white;
  margin: 10px 0px;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 3px;
`;
const Option = styled.option`
  margin: 40px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const FilterText = styled.span`
  font-size: 10px;
  font-weight: 100;
  margin-right: 20px;
  padding: 10px;
`;
const UserSide = styled.div`
padding: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Gamelvl1 = () => {
  const navigate = useNavigate()
  const [selectValue, setSelectValue] = useState('')
  const [question, setQuestion] = useState('')
  const [answerAState, setAnswerAState] = useState('')
  const [answerBState, setAnswerBState] = useState('')
  const [answerCState, setAnswerCState] = useState('')
  const [answerDState, setAnswerDState] = useState('')
  const [correctAnswerState, setCorrectAnswerState] = useState('')

  const [usarnameScore, setUsarnameScore] = useState(0)




  const userNameFromLocal = window.localStorage.getItem('user')


  const startGame = async e => {
    e.preventDefault();
    const res = await axios.get('http://localhost:8080/api/ask/ask/bycategory/1')
    const res2 = await axios.get(`http://localhost:8080/api/player/searchplayer/${userNameFromLocal}`)
    setCorrectAnswerState(res.data.correctAnswer);
    setAnswerAState(res.data.answerA);
    setAnswerBState(res.data.answerB);
    setAnswerCState(res.data.answerC);
    setAnswerDState(res.data.answerD);
    setQuestion(res.data.ask);
    setUsarnameScore(res2.data.score);
    

  }
  const backToHome = () => {
    navigate('/')
    window.localStorage.removeItem('user')
  }
  const answerOnChange = (e) => {
    setSelectValue(e.target.value)
  }
  useEffect(() => {
    
  }, [])
  
  const nextLevel = async () => {
    if (selectValue === correctAnswerState) {
      new Swal({
        title: "Respuesta correcta!",
        text: "Has ganado 20 puntos y serás redirigido al nivel 2",
        icon: "success"
      });
      navigate('/Gamelvl2')
      await axios.put(`http://localhost:8080/api/player/updatescore/${userNameFromLocal}/${20}`)
    } else {
      new Swal({
        title: "Respuesta incorrecta!",
        text: "Has perdido",
        icon: "error"
      });
      axios.put(`http://localhost:8080/api/player/updatescore/${userNameFromLocal}/${0}`)
      navigate('/')
    }
  }

  console.log("select: ", selectValue);
  console.log("correct: ", correctAnswerState);

  

  return (
    <Container>
      <div>
        <ButtonSide>
          <Button size="large" onClick={startGame} variant="contained" color="secondary" type="submit" >Iniciar juego nivel 1</Button>
        </ButtonSide>
        <Wrapper>
          <Title>{question} </Title>
          <FilterText>
            <Select onChange={answerOnChange}>
              <Option value={answerAState}>{answerAState}</Option>
              <Option value={answerBState}>{answerBState}</Option>
              <Option value={answerCState}>{answerCState}</Option>
              <Option value={answerDState}>{answerDState}</Option>
            </Select>
          </FilterText>
          <Button onClick={nextLevel} variant="contained" color="primary" type="submit" >ADELANTE</Button>
          <UserSide>
            <h1>{userNameFromLocal} puntuación: {usarnameScore}</h1>
          </UserSide>
          <Button onClick={backToHome} variant="outlined" color="inherit"  >Salir del juego <LogoutIcon /> </Button>
        </Wrapper>


      </div>
    </Container>
  )
}

export default Gamelvl1;