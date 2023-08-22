//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Shop from './Pages/Shopping/Shop';
import Cart from './Pages/Cart/Cart';
import ShopContext from './Context/ShopContext';
function App() {
  return (
    <div className="App">
      <ShopContext>
        <ChakraProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </ShopContext>

    </div>
  );
}

export default App;
