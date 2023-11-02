import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './global'
import { RoutesComponent } from './pages/router/routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RoutesComponent />
      <GlobalStyle />
    </ThemeProvider>
  )
}
