import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx'
import logo from '../../Images/logo2.png'
import { MobileStyle } from "./Styles";
import { useNavigate } from 'react-router-dom';
import { goToAlbums, goToHome, goToArtists, goToTracks } from '../../Routes/Coordinators';
import { Settings } from '../Settings/Settings';

export const MobileBar = (props) => {

    const navigate = useNavigate()

    const [setts, setShowSetts] = useState(true)
    const [menu, setMenu] = useState(false)

    return (
    <MobileStyle color={props.color.hex}>
    <div className={menu ? "mobile-menu" : "mobile-bar"}>
        <div className="head" onClick={() => setMenu(!menu)} >
        <img src={logo} alt="idunno" id="logo"/>
        {menu ? <RxCross2 onClick={() => setMenu(false)}id="close"/> : <p id="menu">Menu</p>}
         </div>
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
        </ul>
        <Settings 
        amount={props.amount}
        setAmount={props.setAmount}
        color={props.color}
        setColor={props.setColor}
        setts={setts}
        menu={menu}
        />
        </div>
    </MobileStyle>
    )
}