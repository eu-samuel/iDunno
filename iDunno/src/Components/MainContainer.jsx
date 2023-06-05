import logo from '../assets/logo.png'
import { MainStyle } from "../Styles/MainStyle";
import { Showcase } from "./Showcase";
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import { requestArtists, requestAlbums, requestTracks } from './../Requests';

export const MainContainer = () => {


  const [search1, setSearch1] = useState("")
  const [search2, setSearch2] = useState("")
  const [search3, setSearch3] = useState("")


  const [artists, setArtists] = useState("")
  const [tracks, setTracks] = useState("")
  const [albums, setAlbums] = useState("")

  console.log(artists)


  return (
    <>
    <img src={logo} id="logo" alt="iDunno"/>
        <MainStyle>
    <div className="search">
        <input
        value={search1}
        onChange={(e) => setSearch1(e.target.value)}
        placeholder="Busque seu artista aqui"
      />
      <BsSearch id="main-btn" onClick={() => requestArtists(search1, setArtists)}/>
      <input
        value={search2}
        onChange={(e) => setSearch2(e.target.value)}
        placeholder="Busque seu álbum aqui"
      />
      <BsSearch id="main-btn" onClick={() => requestAlbums(search2, setAlbums)}/>
      <input
        value={search3}
        onChange={(e) => setSearch3(e.target.value)}
        placeholder="Busque sua faixa aqui"
      />
      <BsSearch id="main-btn" onClick={() => requestTracks(search3, setTracks)}/>    
      </div>
      <Showcase 
      artists={artists}
      albums={albums}
      tracks={tracks} />

  <span id="credits">Made by Samuel Pereira</span>
    </MainStyle>
    </>
  );
};
