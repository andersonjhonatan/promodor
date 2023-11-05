import { NavLink } from 'react-router-dom'
import {
  HeaderContainer,
  SvgHome,
  SvgHistory,
  LogoHeader,
} from './Header.styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoHeader src={logo} alt="Logo" />
      <nav>
        <NavLink to="/" title="homeTimer">
          <SvgHome />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <SvgHistory />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
