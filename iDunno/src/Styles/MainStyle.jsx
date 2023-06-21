import styled from "styled-components";

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
    border: solid 1px gray;
    padding-left: 1vw;

    
    @media only screen and (min-width : 320px) and (max-width : 480px) {
      padding-left: 3vw;
      width: 75vw;
      position: relative;
      left: 3vw;
    }
`

export const Logo = styled.div`
    position: absolute;
    top: 10vh;
    left: 18vw;
    img{width: 70%;}
`
