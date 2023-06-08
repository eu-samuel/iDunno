import Logo from '../../assets/logo.png'
import Character from '../../assets/char.png'
import { HeaderStyle } from '../../Styles/HeaderStyle'

export const Header = () => {
    return (
        <HeaderStyle>
            <img src={Character} id="char" alt="Character"/>
            <img src={Logo} id="logo" alt="iDunno"/>
        </HeaderStyle>
    )
}