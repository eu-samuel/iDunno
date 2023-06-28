import styled from 'styled-components';

export const HomePage = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 98vh;
  padding-bottom: 2vh;
  color: white;

  .content, .invite {display: flex;}
  p, #demo, .credits {position: relative;}

  .invite{
    flex-direction: column;
    align-items: center;
    gap: 6vh;
  }

  p{
    text-align: left;
    width: 55%;
    position: relative;
    left: 5vw;
    top: 6vh;
    font-size: 22px;
    font-weight: 700;
  }

  #demo{
    position: relative;
    left: 5vw;
    width: 65%;
  }

  #boy{
    width: 75%;
    transform: scale(-1, 1);
  }
  .credits{top: 10vh;}
  #logo{width: 55%;}

`;
