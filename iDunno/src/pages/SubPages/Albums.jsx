import React from 'react';
import logo from '../../Images/logo.png';
import { Showcase } from '../../Components/Showcases/Styles';
import { Page } from "../Style";
import { Bar } from '../../Components/Bar/Bar';
import { AlbumsCase } from '../../Components/Showcases/AlbumsCase'
import { useContent, useSettings } from '../../States';
import { Loader } from '../../Components/Loader/Loader';
import { requestAlbums } from '../../Requests';
import { SearchBar } from '../../Components/Bar/Styles';
import { Input, Button } from "../../Styles/MainStyle";
import { BsTrash, BsSearch } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';

export const Albums = () => {

  const { search, setSearch, content, setContent, isLoading, setIsLoading, clearStuff } = useContent()
  const { amount, setAmount, color, setColor } = useSettings()

  return (
    <>
      <Bar
        amount={amount}
        setAmount={setAmount}
        color={color}
        setColor={setColor} />

      <Page>
        <div className="head">
          <img src={logo} alt="idunno" />
          <SearchBar>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Busque seus álbuns aqui."}
            // onKeyPress={(e) => handleEnter(e)}
            />
            <Button>
              <BsSearch onClick={() => requestAlbums(search, setContent, setSearch, setIsLoading, amount)} />
            </Button>
            <BsTrash id="clear" onClick={() => clearStuff()} />
          </SearchBar>
        </div>
        <Showcase>
          Click on the card for being redirected to respective spotify's page.
          <br />
          <br />
          {isLoading ? <Loader /> : <AlbumsCase content={content} />}
        </Showcase>

        <div className="credits">
          <FaGithub id="git" />
          <span id="credits">Made by Samuel Pereira</span>
        </div>
      </Page>
    </>
  );
};
