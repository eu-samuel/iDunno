import { Image, Card, Spotify} from "./Styles"
import DefaultMusic from '../../Images/Components/defaultmusic.png'
import Btn from '../../Images/Components/button.png'
import Mobile from '../../Images/Components/mobile-btn.png'
import { useContent } from "../../States"

export const TracksCase = () => {

    const {search, setSearch, content, setContent, isLoading, setIsLoading} = useContent()

    const defaultTrack = (track) => {
        if(track.data.albumOfTrack.coverArt) {
            return (<Image image={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name}/>)
        } return (<Image image={DefaultMusic} alt={track.data.name}/>)
    }


    return (
    <>

        {content.length > 0 ? content.map((track) => {
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