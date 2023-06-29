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
  p, #demo, .credits, #logo {position: relative;}

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

  #boy{width: 75%;transform: scale(-1, 1);}
  .credits{top: 10vh;}
  #logo{width: 55%;}

  @media only screen and (min-width : 320px) and (max-width : 600px) {

  p{
    text-align: center;
    width: 90%;
    font-size: 21px;
    left: -1vw;
    top: 5vh;
  }

  #demo{
    position: relative;
    left: 0vw;
    top: 3vh;
    width: 95vw;
  }

  #boy{display: none;}
  .credits{
    display: flex;
    gap: 3vw;
    top: 20vh;}
  #logo{
    top: 8vh;
    right: 9vw;
    width: 85%;
  }

  }
`;
