import React from 'react';
import logo from '../../Images/Components/logo.png';
import { Showcase } from '../../Components/Showcases/Styles';
import { Page } from "../Style";
import { Bar } from '../../Components/Bar/Bar';
import { ArtistsCase } from '../../Components/Showcases/ArtistsCase'
import { useContent } from '../../States';
import { Loader } from '../../Components/Loader/Loader';
import { requestArtists } from '../../Requests';
import { SearchBar } from '../../Components/Bar/Styles';
import { Input, Button } from "../../Styles/MainStyle";
import { BsTrash, BsSearch } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';

export const Artists = () => {

  const { search, setSearch, content, setContent, isLoading, setIsLoading, clearStuff } = useContent()

  return (
    <>
      <Bar />

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
              <BsSearch onClick={() => requestArtists(search, setContent, setSearch, setIsLoading)} />
            </Button>
            <BsTrash id="clear" onClick={() => clearStuff()} />
          </SearchBar>
        </div>
        <Showcase>
          Click on the card for being redirected to respective spotify's page.
          <br />
          <br />
          {isLoading ? <Loader /> : <ArtistsCase content={content} />}
        </Showcase>

        <div className="credits">
          <FaGithub id="git" />
          <span id="credits">Made by Samuel Pereira</span>
        </div>
      </Page>
    </>
  );
};
