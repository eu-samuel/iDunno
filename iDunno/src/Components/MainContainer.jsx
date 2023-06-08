import React from 'react';
import { useState } from 'react';
import { MainStyle } from "../Styles/MainStyle";
import { Showcase } from "./Showcase/Showcase";
import { Header } from './Header/Header';
import { requestArtists, requestAlbums, requestTracks } from './../Requests';

export const MainContainer = () => {


  const [search1, setSearch1] = useState("")
  const [search2, setSearch2] = useState("")
  const [search3, setSearch3] = useState("")

  const [artists, setArtists] = useState("")
  const [tracks, setTracks] = useState("")
  const [albums, setAlbums] = useState("")

  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)
  const [isLoading3, setIsLoading3] = useState(false)

  const handleEnter1 = (e) => {
    if(e.key === 'Enter') {requestArtists(search1, setArtists, setIsLoading1)}
  }

  const handleEnter2 = (e) => {
    if(e.key === 'Enter') {requestAlbums(search2, setAlbums, setIsLoading2)}
  }

  const handleEnter3 = (e) => {
    if(e.key === 'Enter') {requestTracks(search3, setTracks, setIsLoading3)}
  }

  const searches = [search1, setSearch1, search2, setSearch2, search3, setSearch3]
  const content = [artists, setArtists, albums, setAlbums, tracks, setTracks]
  const loaders = [isLoading1, setIsLoading1, isLoading2, setIsLoading2, isLoading3, setIsLoading3]
  const handlers = [handleEnter1, handleEnter2, handleEnter3]

  return (
    <>
    <Header/>
        <MainStyle>
      <Showcase 
        searches={searches}
        content={content}
        loaders={loaders}
        handlers={handlers}
        />
  <span id="credits">Made by Samuel Pereira</span>
    </MainStyle>
    </>
  );
};
