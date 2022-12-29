import logo from './logo.svg';
import {
  Box,
  Button} from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Box bg='brand.accent' d>
          Hola Mundo
      </Box>
      <Button size='lg' variant='cta'>This is</Button>
      <Button size='lg' variant='ghost'>This is</Button>
      <Button size='lg' variant='outline'>This is</Button>
    </div>
  );
}

export default App;
