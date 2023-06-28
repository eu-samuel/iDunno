import styled from 'styled-components';

export const Page = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 4vh;
  color: white;

  p{
    text-align: left;
    width: 35%;
    position: relative;
    right: 12vw;
    bottom: 10vh;
    font-size: 25px;
    font-weight: 700;
  }

  .head{
    display: flex;
    width: 50vw;
    position: relative;
    gap: 3vw;
    left: 20vw;
    top: 8vh;
    img{width: 45%;}
  }

  .credits{
    display: flex;
    img{width: 8%;}
    justify-content: center;
    color: white;
    align-items: center;
    gap: 2vw;
    #git{font-size: 30px;}
  }
`;
