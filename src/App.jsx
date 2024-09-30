import './App.css'
import ItemContainer from './components/ItemListContainer/ItemListContainer.jsx';
import BarraDeNavegacion from './components/NavBar/NavBar.jsx';

function App() {

  return (
    <>
      <BarraDeNavegacion index={'Home'} contact={'Contact'} shopcart={'./src/assets/react.svg'} className={'botonesNavbar'}/>
        <ItemContainer/>
    </>
  )
}

export default App
