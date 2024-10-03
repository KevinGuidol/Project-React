import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraDeNavegacion from './components/NavBar/NavBar.jsx';
import SingleProductView from './components/Views/SingleProductView.jsx';
import HomeView from './components/Views/HomeView.jsx';

function App() {

  return (
    <>
      <BrowserRouter basename="/Project-React">
        <BarraDeNavegacion index={'Home'} contact={'Contact'} shopcart={'./src/assets/react.svg'} className={'botonesNavbar'}/>
        <Routes>
          <Route exact path="/" element={<HomeView />}/>
          <Route exact path="/product/:id" element={<SingleProductView />}/>
          <Route exact path="/category/:categoryId" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;