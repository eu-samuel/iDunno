import { Image, Card, Spotify } from "./Styles"
import DefaultArtist from '../../Images/Components/defaultpic.png'
import Btn from '../../Images/Components/button.png'
import Mobile from '../../Images/Components/mobile-btn.png'


export const ArtistsCase = (props) => {

    const defaultArtist = (artist) => {
        if(artist.data.visuals.avatarImage) {
            return ( <Image image={artist.data.visuals.avatarImage.sources[0].url} alt={artist.data.profile.name}/>)
        } return (<Image image={DefaultArtist} alt={artist.data.profile.name}/>)
    }
    return (
        <>
            {props.content.length > 0 ? props.content.map((artist) => {
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
