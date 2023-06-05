import axios from 'axios';

export const requestArtists = async (artist, setState) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: artist,
        type: "artists",
        offset: '0',
        limit: 10,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setState(response.data.artists.items);
    } catch (error) {
      console.error(error);
    }
  }

  export const requestTracks = async (track, setState) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: track,
        type: "tracks",
        offset: '0',
        limit: 10,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setState(response.data.tracks.items);
    } catch (error) {
      console.error(error);
    }
  }

  export const requestAlbums = async (album, setState) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: album,
        type: "albums",
        offset: '0',
        limit: 10,
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '99ba5332a8mshda20c5747345ba9p1eed56jsnf375583e211d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setState(response.data.albums.items);
    } catch (error) {
      console.error(error);
    }
  }