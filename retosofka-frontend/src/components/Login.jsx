import styled from 'styled-components';
import React, { useState, useContext, useEffect } from "react";
import Button from '@material-ui/core/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: light white;
`;
const ButtonSide = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;
const Login = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate();

  const goToPlay = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/player/addplayer', {
      username: username
    })
    window.localStorage.setItem('user', username);
    console.log(username);
    navigate('/Game');

  }
  const userInput = (e) => {
    setUsername(e.target.value)

  }
  return (
    <Container>
      <Wrapper>
        <Title>Bienvenido <EmojiEmotionsIcon fontSize='large' /></Title>
        <Title>Ingresa un usuario para jugar </Title>

        <Form>
          <Input onChange={userInput} placeholder='Usuario' />
          <Button to='/game' onClick={goToPlay} variant="contained" color="primary" type="submit" >ADELANTE</Button>

        </Form>

      </Wrapper>
    </Container>
  )
}

export default Login;