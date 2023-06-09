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
    right: 2.5vw;
    top: .4vh;
    cursor: pointer;
    :active{
      transform: scale(0.91)
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
      right: 6vw;
      bottom: 3.5vh;
    }
`

export const Input = styled.input`
    width: 25vw;
    height: 4vh;
    font-size: 15px;
    border-radius: 10px;
    background-color: white;
    color: #000000;
    border: none;
    padding-left: 1vw;

    
    @media only screen and (min-width : 320px) and (max-width : 480px) {
      padding-left: 3vw;
      width: 75vw;
      position: relative;
      left: 3vw;
    }
`
