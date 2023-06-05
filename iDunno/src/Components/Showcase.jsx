import { ShowcaseStyle } from "../Styles/ShowCaseStyle"
import btn from '../assets/button.png'

  export const Showcase = (props) => {
    

    const defaultImage = () => {
        return (
            <>
            </>
        )
    }


    return (
        <ShowcaseStyle>
        
    <div className="showcase">{props.artists.length > 0 ?
        props.artists.map((artist) => {
            return (
            <div className="card">
                <img src={artist.data.visuals.avatarImage.sources[0].url} alt={artist.data.profile.name}/>
                <span>{artist.data.profile.name}</span>
                <a href={artist.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </div>
            )
        })
    : ""}
    </div>

    <div className="showcase">
        {/* {props.albums.length > 0 ?
        props.albums.map((album) => {
            return (
            <div className="card">
                <img src={album.data.visuals.avatarImage.sources[0].url} alt={album.data.profile.name}/>
                <span>{album.data.profile.name}</span>
                <a href={album.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </div>
            )
        })
    : ""} */}
    </div>

    <div className="showcase">
        {/* {props.tracks.length > 0 ?
        props.tracks.map((track) => {
            return (
            <div className="card">
                <img src={track.data.visuals.avatarImage.sources[0].url} alt={track.data.profile.name}/>
                <span>{track.data.profile.name}</span>
                <a href={track.data.uri}><img src={btn} id="btn" alt="listen on spotify"/></a>
            </div>
            )
        })
    : ""} */}
    </div>
        </ShowcaseStyle>
    )
  }