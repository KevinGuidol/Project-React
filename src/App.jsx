import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraDeNavegacion from './components/NavBar/NavBar.jsx';
import SingleProductView from './components/Views/SingleProductView.jsx';
import HomeView from './components/Views/HomeView.jsx';
import CartView from './components/NavBar/CartWidget.jsx'
import { CartProvider } from './components/context/cartContext.jsx';
import { Checkout } from './components/Checkout/Checkout.jsx'


export const notify = (tipoMensaje, mensaje) => {

  const tipo = tipoMensaje

  if (tipo === 'success') {
    toast.success(mensaje , {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }else if (tipo === 'error') {
    toast.error(mensaje, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark  ",
      transition: Bounce,
      });
  }else if (tipo === 'info') {
    toast.info(mensaje, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
    
}
function App() {
  return (
    <>
      <BrowserRouter basename="/Project-React">
        <CartProvider>
          <BarraDeNavegacion />
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/product/:id" element={<SingleProductView />} />
            <Route exact path="/category/:categoryId" element={<HomeView />} />
            <Route exact path='/cart' element={<CartView />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App;