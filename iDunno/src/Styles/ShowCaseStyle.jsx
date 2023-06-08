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
        width: 25vw;
        min-height: 60vh;
        margin: 0 auto;
        margin-top: 1vw;
    }
       
`

export const Card = styled.div`
    
        width: 22vw;
        height: 5vh;
        border-radius: 8px;
        background-color: #171717;
        color: white;
        margin: 0 auto;
        display: flex;
        gap: 5vh;
        margin-top: 1vh;
        padding: 1rem;
        align-items: center;
        font-weight: 700;
        span{width: 100%;}

        img{
            width: 3vw;
            height: 3vw;
            border-radius: .5rem;
        }

        button{ 
            background-color: black;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            :active{transform: scale(0.97)}}
            #btn{width: 8vw; height: 6vh;}

`

export const TrackCard = styled.div`
    
        width: 22vw;
        height: 5vh;
        border-radius: 8px;
        background-color: #171717;
        color: white;
        margin: 0 auto;
        display: flex;
        gap: 5vh;
        margin-top: 1vh;
        font-size: 14px;
        padding: 1rem;
        align-items: center;
        font-weight: 700;
        span{width: 245vw;}

        img{
            width: 3vw;
            height: 3vw;
            border-radius: .5rem;
        }

        button{ 
            background-color: black;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            :active{transform: scale(0.97)}}
            #btn{width: 8vw; height: 6vh;}

`
