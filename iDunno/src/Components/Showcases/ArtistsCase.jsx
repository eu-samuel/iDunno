import { MainCase, Image, Card } from "./Styles"
import DefaultArtist from '../../Images/Components/defaultpic.png'


export const ArtistsCase = (props) => {

    const defaultArtist = (artist) => {
        if (artist.data.visuals.avatarImage) {
            return (<Image image={artist.data.visuals.avatarImage.sources[0].url} alt={artist.data.profile.name} />)
        } return (<Image image={DefaultArtist} alt={artist.data.profile.name} />)
    }
    return (
        <MainCase>
            {props.content.length > 0 ? props.content.map((artist) => {
                return (
                    <Card>
                        <a href={artist.data.uri}>
                            <div className="card">
                                {defaultArtist(artist)}
                                <span>{artist.data.profile.name}</span>
                            </div>
                        </a>
                    </Card>
                )
            })
                : ""
            }
        </MainCase>
    )
}
