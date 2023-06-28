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
  p, .head, .credits {position: relative;}

  p{
    text-align: left;
    width: 35%;
    right: 12vw;
    bottom: 10vh;
    font-size: 25px;
    font-weight: 700;
  }

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
`;
