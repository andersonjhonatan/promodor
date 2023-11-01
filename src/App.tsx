import Button from './components/Button';
import './global.css';

export function App() {
  return (
    <>
      <Button text='Button' variant='primary' />
      <Button text='Button1' variant='secondary' />
      <Button text='Button2' variant='danger' />
      <Button text='Button3' variant='sucess' />
      <Button text='Button3' />
    </>
  );
}
