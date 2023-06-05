import  styled  from 'styled-components';

export const ShowcaseStyle = styled.div`

    display: flex;
    gap: 1.5vw;
    
    .showcase{
        font-family: "Montserrat", Helvetica, sans-serif;
        background: #2D2D2D;
        align-items: center;
        padding: 1rem;
        border-radius: 10px;
        gap: 2vw;
        width: 25vw;
        height: 60vh;
        margin: 0 auto;
        margin-top: 1vw;
    }

    .card{
        width: 10vw;
        height: 30vh;
        border-radius: 8px;
        background-color: #171717;
        color: white;
        display: flex;
        padding: 1rem;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        font-weight: 700;

        img{
            width: 9vw;
            height: 9vw;
        }

        button{ 
            background-color: black;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            :active{transform: scale(0.97)}}
            #btn{width: 8vw; height: 6vh;}
    }
`
