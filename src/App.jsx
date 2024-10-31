import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraDeNavegacion from './components/NavBar/NavBar.jsx';
import SingleProductView from './components/Views/SingleProductView.jsx';
import HomeView from './components/Views/HomeView.jsx';
import CartView from './components/NavBar/CartWidget.jsx'
import { CartProvider } from './components/context/cartContext.jsx';


function App() {

  return (
    <>
      <BrowserRouter basename="/Project-React">
        <CartProvider>
        <BarraDeNavegacion/>
        <Routes>
          <Route exact path="/" element={<HomeView />}/>
          <Route exact path="/product/:id" element={<SingleProductView />}/>
          <Route exact path="/category/:categoryId" element={<HomeView />} />
          <Route exact path='/cart' element={<CartView/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;