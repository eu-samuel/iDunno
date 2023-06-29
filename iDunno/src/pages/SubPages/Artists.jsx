import React from 'react';
import logo from '../../Images/logo.png';
import { Showcase } from '../../Components/Showcases/Styles';
import { Page } from "./Style";
import { Bar } from '../../Components/Bar/Bar';
import { ArtistsCase } from '../../Components/Showcases/ArtistsCase'
import { useContent, useSettings } from '../../States';
import { Loader } from '../../Components/Loader/Loader';
import { requestArtists } from '../../Requests';
import { SearchBar } from '../../Components/Bar/Styles';
import { MobileBar } from '../../Components/Bar/MobileBar';
import { Input, Button } from "../../Components/MainStyle";
import { BsTrash, BsSearch } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';

export const Artists = () => {

  const { search, setSearch, content, setContent, isLoading, setIsLoading, clearStuff } = useContent()
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

      <Page>
        <div className="head">
          <img src={logo} alt="idunno" />
          <SearchBar>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Busque seus artistas aqui."}
            // onKeyPress={(e) => handleEnter(e)}
            />
            <Button>
              <BsSearch onClick={() => requestArtists(search, setContent, setSearch, setIsLoading, amount)} />
            </Button>
            <BsTrash id="clear" onClick={() => clearStuff()} />
          </SearchBar>
        </div>
        <Showcase>
        <span id="message">Click on the card for being redirected to respective spotify's page.</span>
          <br />
          <br />
          {isLoading ? <Loader /> : <ArtistsCase content={content} />}
        </Showcase>

        <div className="credits">
          <a href="https://github.com/eu-samuel"><FaGithub id="git" /></a>
          <span id="credits">Made by Samuel Pereira</span>
        </div>
      </Page>
    </>
  );
};
