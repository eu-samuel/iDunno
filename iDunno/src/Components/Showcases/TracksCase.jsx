import { Image, Card } from "./Styles"
import DefaultMusic from '../../Images/Components/defaultmusic.png'
import { useContent } from "../../States"

export const TracksCase = () => {

    const { search, setSearch, content, setContent, isLoading, setIsLoading } = useContent()

    const defaultTrack = (track) => {
        if (track.data.albumOfTrack.coverArt) {
            return (<Image image={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name} />)
        } return (<Image image={DefaultMusic} alt={track.data.name} />)
    }


    return (
        <>
            {content.length > 0 ? content.map((track) => {
                return (
                    <Card>
                        <Card>
                            <a href={track.data.uri}>
                                <div className="card">
                                    {defaultTrack(track)}
                                    <span>{track.data.artists.items[0].profile.name} - {track.data.name}</span>
                                </div>
                            </a>
                        </Card>
                    </Card>
                )
            })
                : ""}
        </>
    )
}