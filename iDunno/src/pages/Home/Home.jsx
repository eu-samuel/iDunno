import React from 'react';
import { HomePage } from "./Style";
import Girl from '../../assets/Characters/Girl.png'
import logo from '../../assets/logo.png'
import { Logo } from '../../Styles/MainStyle';
import { Bar } from '../../Components/Bar/Bar';
import { Footer } from '../../Components/Footer/Footer';


export const Home = () => {

  return (
    <>
      <HomePage>
        <Logo>
          <img src={logo} alt="idunno"/>
          </Logo>
      <img src={Girl} alt="girl" id="girl" />
        <p>Discover new music with iDunno. 
          Find here your new addiction, it can be an artist, 
          a specific album or a single track!
        </p>
        <Bar/>
      </HomePage>
     <Footer/>
    </>
  );
};
