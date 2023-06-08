import { Image, Card, Spotify} from "../../Styles/ShowCaseStyle"
import DefaultArtist from '../../assets/defaultpic.png'
import DefaultMusic from '../../assets/defaultmusic.png'
import Btn from '../../assets/button.png'
import Mobile from '../../assets/mobile-btn.png'


export const ArtistsContainer = (props) => {
    
    const defaultArtist = (artist) => {
        if(artist.data.visuals.avatarImage) {
            return ( <Image image={artist.data.visuals.avatarImage.sources[0].url} alt={artist.data.profile.name}/>)
        } return (<Image image={DefaultArtist} alt={artist.data.profile.name}/>)
    }
    return (
        <>
            {props.artists.length > 0 ? props.artists.map((artist) => {
                return (
                <Card>
                    {defaultArtist(artist)}
                    <span>{artist.data.profile.name}</span>
                    <a href={artist.data.uri}><Spotify image={Btn} mobile={Mobile}/></a>
                </Card>
                )})
                : ""}
        </>
    )
}

export const AlbumsContainer = (props) => {

    const defaultAlbum= (album) => {
        if(album.data.coverArt) {
            return (<Image image={album.data.coverArt.sources[0].url} alt={album.data.name}/>)
        } return (<Image image={DefaultMusic} alt={album.data.name}/>)
    }

    return (
        <>
            {props.albums.length > 0 ? props.albums.map((album) => {
                return (
                <Card>
                    {defaultAlbum(album)}
                    <span>{album.data.artists.items[0].profile.name} - {album.data.name}</span>
                    <a href={album.data.uri}><Spotify image={Btn} mobile={Mobile}/></a>
                </Card>
                    )})
                    : ""}
            </>
    )
}

export const TracksContainer = (props) => {

    const defaultTrack = (track) => {
        if(track.data.albumOfTrack.coverArt) {
            return (<Image image={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name}/>)
        } return (<Image image={DefaultMusic} alt={track.data.name}/>)
    }


    return (
    <>
        {props.tracks.length > 0 ? props.tracks.map((track) => {
            return (
            <Card>
                {defaultTrack(track)}
                <span>{track.data.artists.items[0].profile.name} - {track.data.name}</span>
                <a href={track.data.uri}><Spotify image={Btn} mobile={Mobile}/></a>
            </Card>
                )})
            : ""}
        </>
    )
}
