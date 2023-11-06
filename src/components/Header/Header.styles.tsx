import styled from 'styled-components'
import { AiOutlineHistory } from 'react-icons/ai'
import { TbTimeDuration45 } from 'react-icons/tb'

// Logo

const LogoHeader = styled.img`
  width: 3rem;
`

// SVGs

const BaseSvgStyles = `
  font-size: 2rem;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
`

const SvgHome = styled(TbTimeDuration45)`
  ${BaseSvgStyles}
`

const SvgHistory = styled(AiOutlineHistory)`
  ${BaseSvgStyles}
`

// Components

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['blue-200']};
  box-shadow: 0 0 10px 2px rgba(0, 0, 30);
  justify-content: space-between;
  display: flex;
  padding: 1.5rem 5rem;
  align-items: center;
  height: 5rem;
  border-radius: 8px 8px 0 0;

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['cinza-100']};

    &:hover {
      border-bottom: 2px dashed ${(props) => props.theme['blue-claro-500']};
      transition: 0.3s;
    }

    &.active {
      border-bottom: 2px dashed ${(props) => props.theme['blue-claro-500']};
      transition: 0.3s;
      color: ${(props) => props.theme['blue-claro-500']};
    }
  }
`
export { HeaderContainer, SvgHome, SvgHistory, LogoHeader }
