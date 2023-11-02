import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

export const History = () => {
  return (
    <div>
      <h1>History</h1>
      <Link to="/">
        <Button text="Voltar" />
      </Link>
    </div>
  )
}
