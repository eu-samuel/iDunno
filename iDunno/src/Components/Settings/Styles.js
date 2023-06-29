import styled from "styled-components";

export const SettingsWindow = styled.div`

    .on, .off{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1vw;
        margin: 0 auto;
        font-size: 14px;
        height: 35vh;
        position: relative;
        top: -30vh;
        background-color: ${(props) => props.color};
        transition: 200ms;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .on{ width:  20vw; left: 15vw; }
    p{font-size: 11px;}

    .off{ left: -30vw; width: 0vw;
        .amount{display: none}
        .colors{display: none}
    }

    .amount{     
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        input{ text-align: center; width: 2.5vw; }
    }

    .input{
        display: flex;
        align-items:center;
        gap: 1.5vw;
        font-weight: 700;
        input{
            border: none;
            width: 2vw;
            height: 3vh;
            border-radius: 3px;
        }
    }

    
    @media only screen and (min-width : 320px) and (max-width : 600px) {
       
    .on, .off{
        font-size: 14px;
        height: 32vh;
        background: #333333;
        border-radius: 8px;
        top: 4vh;
    }

    .on{ width: 80vw; left: 0; }
    #mobile-off{display: none}
    .input{input{width: 10vw;}}
    p{font-size: 11px;}

    }

`