import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { History } from '../History'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
