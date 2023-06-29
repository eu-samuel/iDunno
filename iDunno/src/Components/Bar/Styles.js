import styled from 'styled-components'

export const NavBar = styled.nav`

    width: 10vw;
    min-height: 100vh;
    background: ${(props) => props.color};
    position: fixed;
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    z-index: 10;

    ul, span, li, #logo{ position: relative; display: flex; }
    
    ul{
        margin-top: 10vh;
        flex-direction: column;
        gap: 3vh;
        right: 3vw;
        list-style: none
    }

    li{
        font-size: 1vw;
        max-width: 10vw;
        height: 8vh;
        color: white;
        cursor: pointer;
        transition: 200ms;
    }

    span{
        align-items: center;
        gap: 1vw;
        left: 1vw;
    }

    #logo{ width: 40%; top: 5vh; }
    #icon{font-size: 20px;}
    li:active{transform: scale(0.92)}
    li:hover{font-weight: 700;}
    a{text-decoration: none;}

    @media only screen and (min-width : 320px) and (max-width : 600px) {display: none;}

`

export const MobileStyle = styled.nav`

        display: none;

    @media only screen and (min-width : 320px) and (max-width : 600px) {
    

        width: 100vw;
        background: ${(props) => props.color};
        position: fixed;
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        z-index: 10;

        .head{height: 8vh; }
        #close{
            font-size: 25px;
            left: 28vw;
            cursor: pointer;
        }

        #close:active{transform: scale(0.96)}


        .mobile-menu{
            height: 100vh;
            transition: 200ms;
            ul, span, li, #close, .head{ position: relative; display: flex;}
    
        ul{
            flex-direction: column;
            gap: 2vh;
            list-style: none;
            top: 3vh;
        }

        li{
            font-size: 5vw;
            max-width: 10vw;
            height: 8vh;
            color: white;
            cursor: pointer;
            transition: 200ms;
        }

        .head{
            align-items: center; 
            justify-content: center;
            gap: 10vw;
            border-bottom: solid 1px white; 
            
        #logo{ width: 12%; margin-left: 6vw;} }
        #icon{font-size: 25px;}
        li:active{transform: scale(0.92)}
        li:hover{font-weight: 700;}
        a{text-decoration: none;}
        span{align-items: center; gap: 5vw;}  
    }

    .mobile-bar{
        transition: 200ms;
        height: 8.5vh;
        ul{display: none}
        .head{
            display: flex;
            align-items: center;
            margin-top: .5vh;
            justify-content: center;
            gap: 10vw;
            #logo{width: 12%}
        }
    }
}

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
        #clear:active{transform: scale(0.95);}

    @media only screen and (min-width : 320px) and (max-width : 600px) {
    
        margin-left: 0;
        justify-content: center;
        #clear{  right: 2vw;}
    }

`