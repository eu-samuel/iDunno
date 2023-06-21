import { Image, Card, Spotify} from "./Styles"
import DefaultMusic from '../../Images/Components//defaultmusic.png'
import Btn from '../../Images/Components/button.png'
import Mobile from '../../Images/Components/mobile-btn.png'


export const AlbumsCase = (props) => {

    const defaultAlbum= (album) => {
        if(album.data.coverArt) {
            return (<Image image={album.data.coverArt.sources[0].url} alt={album.data.name}/>)
        } return (<Image image={DefaultMusic} alt={album.data.name}/>)
    }

    return (
        <>
            {props.content.length > 0 ? props.content.map((album) => {
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
