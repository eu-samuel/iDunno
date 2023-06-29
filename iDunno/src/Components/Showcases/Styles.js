import  styled  from 'styled-components';

export const MainCase = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5vw;

    @media only screen and (min-width : 320px) and (max-width : 600px) {
        display: flex; 
        flex-direction: column;
        align-items: center;
    }
`

export const Showcase = styled.div`
        font-family: "Montserrat", Helvetica, sans-serif;
        align-items: center;
        min-height: 60vh;
        margin: 0 auto;
        width: 75vw;
        margin-right: 8vw;
        margin-top: 12vh;
        padding-bottom: 10vh;

        @media only screen and (min-width : 320px) and (max-width : 600px) {
            margin-top: 20vh;
            width: 95vw;
            
            #message{ overflow: hidden; white-space: break-spaces;}

            span{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                direction: ltr;
                font-size: 16px;
            }
        }
    
`
export const Image = styled.div`

        background-image: url(${(props) => props.image});
        background-size: cover;
        width: 11vw;
        height: 22vh;
        border-radius: 6rem;

        @media only screen and (min-width : 320px) and (max-width : 480px) {
            width: 20vw;
            height: 11vh;
            border-radius: 6rem;
        }
`

export const Card = styled.div`
    
    .card {
        width: 12vw;
        height: 27vh;
        border-radius: 8px;
        background-color: #181818;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 1vh;
        margin-top: 1vh;
        font-size: .8rem;
        padding: 1rem;
        align-items: center;
        font-weight: 600;
        cursor:pointer;
    }

    .card:hover{background-color: #252525;}

    a{text-decoration: none;}



    @media only screen and (min-width : 320px) and (max-width : 480px) {
        
    .card {
        width: 75vw;
        height: 10vh;
        flex-direction: row;
        gap: 8.5vw;
        margin-top: 1vh;
        font-size: 1.1rem;
    }
            
}

`
