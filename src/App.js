import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider, Container } from 'rsuite';
import NavbarComponent from './Components/NavbarComponent';
import AllProducts from './Pages/AllProducts';
import Products from './Pages/Products'
import Checkout from './Pages/Checkout'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <CustomProvider theme='light'>
      <Container className='app'>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<AllProducts></AllProducts>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
      </BrowserRouter>
      </Container>
    </CustomProvider>
  );
}

export default App;
