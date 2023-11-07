import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
  height: 100%;
  justify-content: space-evenly;
  form {
    section {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['blue-200']};
      width: 20%;
      border-radius: 8px;
    }
  }
`

const DivForm = styled.div`
  display: flex;
  gap: 1rem;
  width: 82%;
  justify-content: center;
  align-items: center;
`

// countdown

const CountdownDiv = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  p {
    font-size: 6rem;
  }

  span {
    border: 1px solid #fff;
    padding: 2rem 2rem;
    font-size: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-family: 'Roboto Mono', monospace;
  }
`
export { DivForm, CountdownDiv, FormContainer }
