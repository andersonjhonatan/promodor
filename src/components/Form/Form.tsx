import Button from '../Button/Button'
import Input from '../Input/Input'
import { FormContainer, DivForm, CountdownDiv } from './formStyles'

export default function Form() {
  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <DivForm>
        <label htmlFor="nome">Vou trabalhar com</label>
        <Input
          variant="nome"
          id="nome"
          name="nome"
          label="Nome"
          placeholder="Nome do seu Projeto"
          list="sugestions-task"
        />

        <datalist id="sugestions-task">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
          <option value="Projeto 5" />
        </datalist>

        <label htmlFor="minutes">durante</label>
        <Input
          variant="minutes"
          id="minutes"
          type="number"
          name="nome"
          label="Nome"
          placeholder="00"
          min={0}
          max={60}
          step={5}
        />
        <span>minutos.</span>
      </DivForm>

      <CountdownDiv>
        <span>0</span>
        <span>0</span>
        <p>:</p>
        <span>0</span>
        <span>0</span>
      </CountdownDiv>

      <Button type="submit" variant="primary" text="Começar" disabled />
    </FormContainer>
  )
}
