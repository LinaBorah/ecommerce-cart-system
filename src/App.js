//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' />
            <Route path='/cart' />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
