import React from 'react';
import { HomePage } from "./Style";
import Girl from '../../Images/Characters/Girl.png'
import logo from '../../Images/Components/logo.png'
import { Logo } from '../../Styles/MainStyle';
import { Bar } from '../../Components/Bar/Bar';


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
    </>
  );
};
