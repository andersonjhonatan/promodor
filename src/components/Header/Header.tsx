import { Link } from 'react-router-dom'
import { UL, NAV } from './Header.styles'

const Header = () => {
  return (
    <NAV>
      <h1>Logo</h1>
      <UL>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </UL>
    </NAV>
  )
}

export default Header
