import { MainCase, Image, Card } from "./Styles"
import DefaultMusic from '../../Images/defaultmusic.png'

export const TracksCase = (props) => {


    const defaultTrack = (track) => {
        if (track.data.albumOfTrack.coverArt) {
            return (<Image image={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name} />)
        } return (<Image image={DefaultMusic} alt={track.data.name} />)
    }


    return (
        <MainCase>
            {props.content.length > 0 ? props.content.map((track) => {
                return (
                    <Card>
                        <Card>
                            <a href={track.data.uri}>
                                <div className="card" key={track.data.uri}>
                                    {defaultTrack(track)}
                                    <span>{track.data.artists.items[0].profile.name} - {track.data.name}</span>
                                </div>
                            </a>
                        </Card>
                    </Card>
                )
            })
                : ""}
        </MainCase>
    )
}