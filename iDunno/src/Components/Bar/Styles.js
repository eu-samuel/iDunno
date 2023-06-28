import styled from 'styled-components'

export const NavBar = styled.nav`

    width: 10vw;
    min-height: 100vh;
    background: #16A347;
    position: fixed;
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    
    ul{
        margin-top: 10vh;
        margin-left: 1vw;
        display: flex;
        flex-direction: column;
        gap: 3vh;
        position: relative;
        right: 1.7vw;
        list-style: none
    }

    li{
        font-size: 15px;
        width: 10vw;
        position: relative;
        display: flex;
        align-items: center;
        height: 8vh;
        color: white;
        cursor: pointer;
        transition: 200ms;
    }

    span{
        display: flex;
        align-items: center;
        gap: 1vw;
        position: relative;
        left: 1.2vw;
    }

    #logo{
        width: 40%;
        position: relative;
        top: 5vh;
    }

    #icon{font-size: 20px;}
    li:active{transform: scale(0.92)}
    li:hover{background: #1ED760;}

`


export const SearchBar = styled.div`

        display: flex; 
        margin-left: 1vw;
        font-size: 20px;
        align-items: center;
        #clear{
            cursor: pointer;    
            background-color: #1ED760;
            color: white;
            width: 2.5vh;
            padding: .5rem;
            border-radius: 10px;
            height: 2.5vh;
            position: relative;
            right: .5vw;
        }
        #clear:active{
            transform: scale(0.95);
        }

        @media only screen and (min-width : 320px) and (max-width : 480px) {
    
        margin-left: 0;
        justify-content: center;
        #clear{  right: 2vw;}
}

`