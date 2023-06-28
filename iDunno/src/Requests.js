import axios from 'axios';
import { amount } from './States';

export const requestArtists = async (artist, setState, setInput, isLoading) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: artist,
        type: "artists",
        offset: '0',
        limit: amount,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      isLoading(true)
      const response = await axios.request(options);
      setState(response.data.artists.items);
      setInput("")
      isLoading(false)
    } catch (error) {
      alert(error);
      isLoading(false)
    }
  }

  export const requestTracks = async (track, setState, setInput, isLoading) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: track,
        type: "tracks",
        offset: '0',
        limit: amount,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      isLoading(true)
      const response = await axios.request(options);
      setState(response.data.tracks.items);
      setInput("")
      isLoading(false)
    } catch (error) {
      alert(error);
      isLoading(false)
    }
  }

  export const requestAlbums = async (album, setState, setInput, isLoading) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: album,
        type: "albums",
        offset: '0',
        limit: amount,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      isLoading(true)
      const response = await axios.request(options);
      setState(response.data.albums.items);
      setInput("")
      isLoading(false)
    } catch (error) {
      alert(error);
      isiLoading(false)
    }
  }
