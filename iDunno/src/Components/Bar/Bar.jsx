import * as BsIcons from 'react-icons/bs';
import logo from '../../Images/Components/logo2.png'
import { NavBar } from "./Styles";
import { useNavigate } from 'react-router-dom';
import { goToAlbums, goToHome, goToArtists, goToTracks } from '../../Routes/Coordinators';

export const Bar = () => {

    const navigate = useNavigate()

    return (
    <NavBar>
        <img src={logo} alt="idunno" id="logo"/>
        <ul>
        <li onClick={() => goToHome(navigate)}>
            <span>
                <BsIcons.BsFillHouseDoorFill id="icon"/>
                Home
            </span>
        </li>
            <li onClick={() => goToArtists(navigate)}>
                <span>
                    <BsIcons.BsPerson id="icon"/>
                    Artists
                </span>
            </li>
            <li onClick={() => goToAlbums(navigate)}>
                <span>
                    <BsIcons.BsJournalAlbum id="icon"/>
                    Albums
                </span>
            </li>
            <li onClick={() => goToTracks(navigate)}>
                <span> 
                    <BsIcons.BsMusicNote id="icon"/>
                    Tracks
                </span>
            </li>
            <li>
                <span>
                    <BsIcons.BsWhatsapp id="icon"/>
                    Contact
                </span>
            </li>

            <li>
                <span>
                    <BsIcons.BsFillGearFill id="icon"/>
                    Settings
                </span>
            </li>
        </ul>
    </NavBar>
    )
}