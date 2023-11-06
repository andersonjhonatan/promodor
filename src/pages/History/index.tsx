import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import {
  HistoryContainer,
  TableContainer,
  TbodyContainer,
} from './historyStyle'
import api from '../../db.json'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <div>
        <TableContainer>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <TbodyContainer>
            {api.tarefas.map((task) => (
              <tr key={task.id}>
                <td>{task.Tarefa}</td>
                <td>{task.Duracao}</td>
                <td>{task.Inicio}</td>
                <td>{task.Status}</td>
              </tr>
            ))}
          </TbodyContainer>
        </TableContainer>
      </div>
      <Link to="/">
        <Button text="Voltar" variant="back" />
      </Link>
    </HistoryContainer>
  )
}
