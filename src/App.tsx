import Button from './components/Button/Button';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button text='Button' variant='primary' />
      <Button text='Button1' variant='secondary' />
      <Button text='Button2' variant='danger' />
      <Button text='Button3' variant='success' />
      <Button text='Button3' />

      <GlobalStyle />
    </ThemeProvider>
  );
}
