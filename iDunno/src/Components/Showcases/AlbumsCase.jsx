import { MainCase, Image, Card } from "./Styles"
import DefaultMusic from '../../Images/Components/defaultmusic.png'
import { useState } from "react"


export const AlbumsCase = (props) => {

    const [spotify, setSpotify] = useState(false)


    const defaultAlbum = (album) => {
        if (album.data.coverArt) {
            return (<Image image={album.data.coverArt.sources[0].url} alt={album.data.name} />)
        } return (<Image image={DefaultMusic} alt={album.data.name} />)
    }

    return (
        <MainCase>
            {props.content.length > 0 ? props.content.map((album) => {
                return (
                    <Card>
                        <a href={album.data.uri}>
                            <div className="card">
                                {defaultAlbum(album)}
                                <span>{album.data.artists.items[0].profile.name} - {album.data.name}</span>
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
