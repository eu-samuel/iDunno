import { ShowcaseStyle } from "./Styles"
import { ArtistsContainer, AlbumsContainer, TracksContainer } from "./Containers";
import { Loading } from '../Showcase/IsLoading';
import { Input, Button } from "../../Styles/MainStyle";
import { BsTrash, BsSearch } from 'react-icons/bs'
import { requestAlbums, requestTracks, requestArtists } from './../../Requests';

  export const Showcase = (props) => {
  
    const [search1, setSearch1, search2, setSearch2, search3, setSearch3] = props.searches
    const [artists, setArtists, albums, setAlbums, tracks, setTracks] = props.content
    const [isLoading1, setIsLoading1, isLoading2, setIsLoading2, isLoading3, setIsLoading3] = props.loaders
    const [handleEnter1, handleEnter2, handleEnter3] = props.handlers


    const clearStuff = (setInput, setState) => {
        setInput("")
        setState("")
    }
    
    return (
        <ShowcaseStyle>

        <div className="container">
        <div className="search">
            <Input 
                value={search1} 
                onChange={(e) => setSearch1(e.target.value)} 
                placeholder="Busque seu artista aqui"
                onKeyPress={(e) => handleEnter1(e)}
            />
        <Button>
            <BsSearch onClick={() => requestArtists(search1, setArtists, setSearch1, setIsLoading1)}/>
        </Button>
        <BsTrash id="clear" onClick={() => clearStuff(setSearch1, setArtists)}/>
        </div>

        <div className="showcase">
            {isLoading1 ? <Loading/> : <ArtistsContainer artists = {artists}/>}
        </div>
    </div>

    <div className="container">
    <div className="search">
            <Input 
                value={search2} 
                onChange={(e) => setSearch2(e.target.value)} 
                placeholder="Busque seu álbum aqui"
                onKeyPress={(e) => handleEnter2(e)}
            />
        <Button>
            <BsSearch onClick={() => requestAlbums(search2, setAlbums, setSearch2, setIsLoading2)}/>
        </Button>
        <BsTrash id="clear" onClick={() => clearStuff(setSearch2, setAlbums)}/>
        </div>

        <div className="showcase">
            {isLoading2 ? <Loading/> :  <AlbumsContainer albums = {albums}/>}
        </div>
        </div>
                  
        <div className="container">
        <div className="search">
            <Input 
                value={search3} 
                onChange={(e) => setSearch3(e.target.value)} 
                placeholder="Busque sua música aqui"
                onKeyPress={(e) => handleEnter3(e)}
            />
        <Button>
            <BsSearch onClick={() => requestTracks(search3, setTracks, setSearch3, setIsLoading3)}/>
        </Button>
        <BsTrash id="clear" onClick={() => clearStuff(setSearch3, setTracks)}/>
        </div>

        <div className="showcase">
            {isLoading3 ? <Loading/> : <TracksContainer tracks = {tracks}/>}
        </div>
        </div>

        </ShowcaseStyle>
    )
  }





