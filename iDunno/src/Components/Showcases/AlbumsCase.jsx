import { MainCase, Image, Card } from "./Styles"
import DefaultMusic from '../../Images/defaultmusic.png'

export const AlbumsCase = (props) => {

    const defaultAlbum = (album) => {
        if (album.data.coverArt) {
            return (<Image image={album.data.coverArt.sources[0].url} alt={album.data.name} />)
        } return (<Image image={DefaultMusic} alt={album.data.name} />)
    }

    return (
        <MainCase>
            {props.content.length > 0 ? props.content.map((album, index) => {
                return (
                    <Card>
                        <a href={album.data.uri}>
                            <div className="card" key={album.data.name}>
                                {defaultAlbum(album)}
                                <span> {album.data.name} - {album.data.artists.items[0].profile.name}</span>
                            </div>
                        </a>
                    </Card>
                )
            })
                : ""
            }
        </MainCase >
    )
}
