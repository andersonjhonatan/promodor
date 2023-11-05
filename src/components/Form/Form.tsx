import Button from '../Button/Button'
import Input from '../Input/Input'
import { FormContainer, DivForm, CountdownDiv, SvgPlay } from './formStyles'

export default function Form() {
  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <DivForm>
        <label htmlFor="nome">
          Vou trabalhar com
          <Input name="nome" label="Nome" placeholder="Nome do seu Projeto" />
        </label>
        <label>
          <button>-</button>
          <Input
            type="number"
            name="nome"
            label="Nome"
            placeholder="Nome do seu Projeto"
            min={0}
            defaultValue={0}
          />
          <button>+</button>
          minutos
        </label>
      </DivForm>

      <CountdownDiv>
        <span>0</span>
        <span>0</span>
        <p>:</p>
        <span>0</span>
        <span>0</span>
      </CountdownDiv>

      <section>
        <Button type="submit" variant="primary" text="Começar" />
        <SvgPlay />
      </section>
    </FormContainer>
  )
}
