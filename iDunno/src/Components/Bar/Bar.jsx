import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import logo from '../../Images/logo2.png'
import { NavBar } from "./Styles";
import { useNavigate } from 'react-router-dom';
import { goToAlbums, goToHome, goToArtists, goToTracks } from '../../Routes/Coordinators';
import { Settings } from '../Settings/Settings';

export const Bar = (props) => {

    const navigate = useNavigate()
    const [setts, setShowSetts] = useState(false)

    return (
    <NavBar color={props.color.hex}>
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
            <a aria-label="Chat on WhatsApp" href="https://wa.me/5521990215170?text=Talk with iDunno's creator."><li>
                <span>
                    <BsIcons.BsWhatsapp id="icon"/>
                    Contact
                </span>
            </li>
            </a>
            <li onClick={() => setShowSetts(!setts)}>
                <span>
                    <BsIcons.BsFillGearFill id="icon"/>
                    Settings
                </span>
            </li>
        </ul>
        <Settings 
        amount={props.amount}
        setAmount={props.setAmount}
        color={props.color}
        setColor={props.setColor}
        setts={setts}
        />
    </NavBar>
    )
}