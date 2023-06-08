import  styled  from 'styled-components';

export const ShowcaseStyle = styled.div`

    display: flex;
    gap: 1.5vw;
    
    .showcase{
        font-family: "Montserrat", Helvetica, sans-serif;
        background: #232323;
        align-items: center;
        padding: 1rem;
        border-radius: 10px;
        width: 28vw;
        min-height: 60vh;
        margin: 0 auto;
        margin-top: 1vw;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
    
    gap: 5vh;
    flex-direction: column;
    .showcase{width: 82vw;}
}
       
`

export const Image = styled.div`

        background-image: url(${(props) => props.image});
        background-size: cover;
        width: 3vw;
        height: 3vw;
        border-radius: 2rem;

        @media only screen and (min-width : 320px) and (max-width : 480px) {
            display: none;
        }
`

export const Card = styled.div`
    
        width: 25vw;
        height: 5vh;
        border-radius: 8px;
        background-color: #171717;
        color: white;
        margin: 0 auto;
        display: flex;
        gap: 5vh;
        margin-top: 1vh;
        font-size: .9rem;
        padding: 1rem;
        align-items: center;
        font-weight: 700;
        span{width: 10vw;}


    @media only screen and (min-width : 320px) and (max-width : 480px) {
        
        width: 72vw;
        gap: 15vw;
        span{
            width: 75vw;
            overflow: hidden;        
            text-overflow:    ellipsis;}
            
}
`

export const Spotify = styled.div`

        background-image:url(${(props) => props.image});
        background-size:cover;
        width: 8vw; 
        height: 6vh;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        :active{transform: scale(0.97)}

    @media only screen and (min-width : 320px) and (max-width : 480px) {

        background-image:url(${(props) => props.mobile});
        width: 9vw; 
        height: 4.4vh;
        margin-left: 12vw;
    }
    
`
