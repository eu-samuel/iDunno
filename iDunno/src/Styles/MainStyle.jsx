import styled from "styled-components";

export const MainStyle = styled.section`
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  min-height: 80vh;
  padding-bottom: 2vh;

`;

export const Button = styled.button`
    color: #302f2f;
    font-weight: 700;
    background: none;
    border: none;
    font-size: 18px;
    position: relative;
    right: 5vw;
    cursor: pointer;
    :active{
      transform: scale(0.91)
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
      left: 36vw;
      bottom: 3.5vh;
    }
`

export const Input = styled.input`
    width: 25vw;
    height: 4vh;
    font-size: 15px;
    border-radius: 10px;
    background-color: white;
    color: black;
    border: none;
    padding-left: 1vw;

    
    @media only screen and (min-width : 320px) and (max-width : 480px) {
      padding-left: 3vw;
      width: 80vw;
    }
`