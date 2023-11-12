import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { formatDistanceToNow } from 'date-fns'
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
import { useEffect, useState, useContext } from 'react'
import { InputForm } from '../../components/Form/formStyles'
import { ContextCyle } from '../../Context/contextProvider'
import ptBR from 'date-fns/locale/pt-BR'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { filterNameProjectSchema } from '../../schema/FormShemaMain'

export const History = () => {
  const [tarefas, setTarefas] = useState(false)
  const { cycles } = useContext(ContextCyle)
  const { handleSubmit, register, watch } = useForm({
    resolver: zodResolver(filterNameProjectSchema),
    defaultValues: {
      search: '',
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setTarefas(true)
    }, 2000)
  }, [tarefas])

  const filteredCycles = cycles.filter((cycle) =>
    cycle.nome.toLowerCase().includes(watch('search').toLowerCase()),
  )

  return (
    <HistoryContainer>
      <ContainerTitle>
        <h1>Meu Histórico</h1>
        <form onSubmit={handleSubmit(() => {})}>
          <InputForm
            type="text"
            list="sugestion-task"
            label="Pesquisar"
            variant="search"
            placeholder="Pesquise sua tarefa"
            {...register('search')}
          />
          <button type="submit">
            <BsSearchHeartStyled />
          </button>
        </form>
        <datalist id="sugestion-task">
          {cycles.map((cycle) => (
            <option key={cycle.id} value={cycle.nome} />
          ))}
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
                {filteredCycles.map((task) => (
                  <tr key={task.id}>
                    <td>{task.nome}</td>
                    <td>{task.minutes} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(task.startDate), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {task.finishDate && (
                        <Status statuscolor="green">Concluído</Status>
                      )}

                      {task.interruptedDate && (
                        <Status statuscolor="red">Interrompido</Status>
                      )}

                      {!task.finishDate && !task.interruptedDate && (
                        <Status statuscolor="yellow">Em Andamento</Status>
                      )}
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
