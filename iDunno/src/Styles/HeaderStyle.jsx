import styled from 'styled-components';

export const HeaderStyle = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16vh;

    #char {
        width: 4%;
        position: absolute;
        left: 35vw;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {

        #char {
            width: 15%;
            position: absolute;
            left: 13vw;
        }

        #logo{
            width: 50%;
            margin-left: 10vw;
        }
    }
`