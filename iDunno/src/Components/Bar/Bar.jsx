import * as BsIcons from 'react-icons/bs';
import logo from '../../assets/logo2.png'
import { NavBar } from "./Style";

export const Bar = () => {
    return (
    <NavBar>
        <img src={logo} alt="idunno" id="logo"/>
        <ul>
            <li>
                <span>
                    <BsIcons.BsPerson id="icon"/>
                    Artists
                </span>
            </li>
            <li>
                <span>
                    <BsIcons.BsJournalAlbum id="icon"/>
                    Albums
                </span>
            </li>
            <li>
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