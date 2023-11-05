import styled from 'styled-components'

import { GrPlay } from 'react-icons/gr'

// SVGs

const SvgPlay = styled(GrPlay)`
  position: absolute;
  left: 25%;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  justify-content: space-evenly;

  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['blue-200']};
    width: 20%;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      trasition: 0.3s;
    }
  }
`

const DivForm = styled.div`
  display: flex;
  gap: 1rem;
  label {
    gap: 0.5rem;
    display: flex;
  }
`

const InputContainer = styled.input`
  padding: 0.5rem;
`

// countdown

const CountdownDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-family: 'Roboto Mono', monospace;

  p {
    font-size: 6rem;
  }

  span {
    border: 1px solid #fff;
    padding: 2rem 2rem;
    font-size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
`
export { FormContainer, InputContainer, DivForm, CountdownDiv, SvgPlay }
