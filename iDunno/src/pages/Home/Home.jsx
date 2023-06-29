import React from 'react';
import Boy from '../../Images/Boy.png'
import logo from '../../Images/logo.png';
import demo from '../../Images/demo.jpg';
import { HomePage } from "./Style";
import { Logo } from '../../Components/MainStyle';
import { Bar } from '../../Components/Bar/Bar';
import { MobileBar } from '../../Components/Bar/MobileBar';
import { useSettings } from '../../States';
import { FaGithub } from 'react-icons/fa';

export const Home = () => {

  const { amount, setAmount, color, setColor } = useSettings()

  return (
    <>
      <Bar
        amount={amount}
        setAmount={setAmount}
        color={color}
        setColor={setColor} />

        <MobileBar
          amount={amount}
          setAmount={setAmount}
          color={color}
          setColor={setColor} 
        />

      <HomePage> 
      <div className="content">
      <div className="invite">
        <Logo>
          <img src={logo} id="logo" alt="idunno"/>
          </Logo>
        <p>Discover new music with iDunno. 
          Find here your new addiction, it can be an artist, 
          a specific album or a single track!
        </p>
        <img src={demo} alt="demonstration" id="demo"/>
        </div>
        <div className="char">
        <img src={Boy} alt="boy" id="boy" />
        </div>
        </div>
        <div className="credits">
          <a href="https://github.com/eu-samuel"><FaGithub id="git" /></a>
          <span id="credits">Made by Samuel Pereira</span>
        </div>
      </HomePage>
    </>
  );
};


