import { FooterStyle } from "./Styles"
import API from '../../assets/spotifyapi.png'
import * as FaIcons from 'react-icons/fa'

export const Footer = () => {
    return (
        <FooterStyle>
          <span id="credits">Made by Samuel Pereira</span>
          <img src={API} alt="spotify-api" id="api" />
          <FaIcons.FaGithub id="git"/>
        </FooterStyle>
    )
}