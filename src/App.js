//import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './Pages/Shop/Shop';
function App() {
  return (
    <div className='App'>
      <ChakraProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart'></Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </div>


  );
}

export default App;
