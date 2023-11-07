import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import {
  HistoryContainer,
  TableContainer,
  TbodyContainer,
  ContainerMain,
  TheadContainer,
  Rotate,
  LoadingSection,
  ContainerTitle,
  BsSearchHeartStyled,
  Status,
} from './historyStyle'
import api from '../../db.json'
import { useEffect, useState } from 'react'
import Input from '../../components/Input/Input'

export const History = () => {
  const [tarefas, setTarefas] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTarefas(true)
    }, 2000)
  }, [tarefas])

  const handleClick = () => {
    alert('Clicou')
  }

  return (
    <HistoryContainer>
      <ContainerTitle>
        <h1>Meu Histórico</h1>
        <form>
          <Input
            type="text"
            list="sugestion-task"
            name="search"
            label="Pesquisar"
            variant="search"
            placeholder="Pesquise sua tarefa"
          />
          <button type="submit" onClick={handleClick}>
            <BsSearchHeartStyled />
          </button>
        </form>
        <datalist id="sugestion-task">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
          <option value="Projeto 5" />
        </datalist>
      </ContainerTitle>

      {!tarefas ? (
        <LoadingSection>
          <Rotate size={200} />
        </LoadingSection>
      ) : (
        <>
          <ContainerMain>
            <TableContainer>
              <TheadContainer>
                <tr>
                  <th>Tarefas</th>
                  <th>Duração</th>
                  <th>Início</th>
                  <th>Status</th>
                </tr>
              </TheadContainer>
              <TbodyContainer>
                {api.tarefas.map((task) => (
                  <tr key={task.id}>
                    <td>{task.Tarefa}</td>
                    <td>{task.Duracao}</td>
                    <td>{task.Inicio}</td>
                    <td>
                      <Status
                        statuscolor={
                          task.Status === 'Concluido'
                            ? 'green'
                            : task.Status === 'Interrompido'
                            ? 'red'
                            : 'yellow'
                        }
                      >
                        {task.Status}
                      </Status>
                    </td>
                  </tr>
                ))}
              </TbodyContainer>
            </TableContainer>
          </ContainerMain>
          <Link to="/">
            <Button text="Voltar" variant="back" />
          </Link>
        </>
      )}
    </HistoryContainer>
  )
}
