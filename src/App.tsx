import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { RoutesComponent } from './pages/router/routes'
import { BrowserRouter } from 'react-router-dom'
import { CycleContextProvider } from './Context/contextProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <RoutesComponent />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
