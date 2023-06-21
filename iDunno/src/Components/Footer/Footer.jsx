import { FooterStyle } from "./Styles"
import API from '../../Images/Components/spotifyapi.png'
import * as FaIcons from 'react-icons/fa'

export const Footer = () => {
    return (
        <FooterStyle>
          <FaIcons.FaGithub id="git"/>
          <span id="credits">Made by Samuel Pereira</span>
          <img src={API} alt="spotify-api" id="api" />
        </FooterStyle>
    )
}