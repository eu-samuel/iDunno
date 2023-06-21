import styled from 'styled-components';

export const Page = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #F4F3F1;
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

  #boy{
    width: 25%;
    position: absolute;
    top: 13vh;
    left: 62vw;
    transform: scale(-1, 1);
  }


`;
