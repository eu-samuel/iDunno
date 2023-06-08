import styled from "styled-components";

export const MainStyle = styled.section`
  margin: 0 auto;
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;

  .search {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    margin-left: 2vw;
  }
  
  #credits{font-family: "Montserrat", sans-serif;}
`;

export const Button = styled.button`
    color: #302f2f;
    font-weight: 700;
    background: none;
    border: none;
    font-size: 18px;
    position: relative;
    right: 3vw;
    cursor: pointer;
    :active{
      transform: scale(0.91)
    }
`

export const Input = styled.input`
    width: 24vw;
    height: 4vh;
    font-size: 15px;
    border-radius: 10px;
    background-color: white;
    color: black;
    border: none;
    padding-left: 1vw;
`