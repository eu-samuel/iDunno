import styled from 'styled-components';
import bg from '../../assets/Backgrounds/homebg.png'

export const HomePage = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('${bg}');
  color: black;

  p{
    text-align: left;
    width: 35%;
    position: relative;
    right: 12vw;
    bottom: 10vh;
    font-size: 25px;
    font-weight: 700;
  }

  #girl{
    width: 35%;
    position: absolute;
    top: 13vh;
    left: 62vw;
  }


`;
