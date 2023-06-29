import styled from 'styled-components';

export const Page = styled.section`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 98vh;
  padding-bottom: 1vh;
  color: white;

  .head, .credits{display: flex};
  .head, .credits {position: relative;}

  .head{
    width: 50vw;
    gap: 3vw;
    left: 20vw;
    top: 8vh;
    img{width: 45%;}
  }

  .credits{
    top: -4vh;
    img{width: 8%;}
    justify-content: center;
    align-items: center;
    gap: 2vw;
    #git{font-size: 30px;}
  }

  @media only screen and (min-width : 320px) and (max-width : 600px) {

    .head{
      width: 90vw;
      align-items: center;
      flex-direction: column;
      left: 0vw;
      top: 15vh;
      img{width: 55%;}
    }

    .credits{top: 2vh;}
  }
`;
