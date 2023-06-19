import styled from 'styled-components'

export const NavBar = styled.nav`

    width: 10vw;
    height: 100vh;
    background: #007BA7;
    position: absolute;
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
        left: 1.5vw;
    }

    #logo{
        width: 40%;
        position: relative;
        top: 5vh;
    }

    #icon{font-size: 20px;}
    li:active{transform: scale(0.92)}
    li:hover{background: #0D98BA;}

`