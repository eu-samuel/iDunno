import { ShowcaseStyle, Card, TrackCard } from "../Styles/ShowCaseStyle"
import btn from '../assets/button.png'
import DefaultArtist from '../assets/defaultpic.png'
import DefaultMusic from '../assets/defaultmusic.png'

  export const Showcase = (props) => {
    

    const defaultArtist = (artist) => {
        if(artist.data.visuals.avatarImage) {
            return ( <img src={artist.data.visuals.avatarImage.sources[0].url} alt={artist.data.profile.name}/>)
        } return (<img src={DefaultArtist} alt={artist.data.profile.name}/>)
    }

    const defaultAlbum= (album) => {
        if(album.data.coverArt) {
            return (<img src={album.data.coverArt.sources[0].url} alt={album.data.name}/>)
        } return (<img src={DefaultMusic} alt={album.data.name}/>)
    }


    const defaultTrack = (track) => {
        if(track.data.albumOfTrack.coverArt) {
            return (<img src={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name}/>)
        } return (<img src={DefaultMusic} alt={track.data.name}/>)
    }


    return (
        <ShowcaseStyle>
        
    <div className="showcase">{props.artists.length > 0 ?
        props.artists.map((artist) => {
            return (
            <Card>
              {defaultArtist(artist)}
                <span>{artist.data.profile.name}</span>
                <a href={artist.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </Card>
            )
        })
    : ""}
    </div>

    <div className="showcase">
        {props.albums.length > 0 ?
        props.albums.map((album) => {
            return (
            <Card>
                {defaultAlbum(album)}
                <span>{album.data.name}</span>
                <a href={album.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </Card>
            )
        })
    : ""}
    </div>

    <div className="showcase">
        {props.tracks.length > 0 ?
        props.tracks.map((track) => {
            return (
            <TrackCard>
                {defaultTrack(track)}
                <span>{track.data.artists.items[0].profile.name} - {track.data.name}</span>
                <a href={track.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </TrackCard>
            )
        })
    : ""}
    </div>
        </ShowcaseStyle>
    )
  }