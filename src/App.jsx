import './App.css'
import './components/ItemListContainer/ItemListContainer.jsx';
import Cards from './components/ItemListContainer/ItemListContainer.jsx';
import BarraDeNavegacion from './components/NavBar/NavBar.jsx';

function App() {

  return (
    <>
      <BarraDeNavegacion index={'Home'} contact={'Contact'} shopcart={'./src/assets/react.svg'} className={'botonesNavbar'}/>
      <section id='saludo'>
        <Cards greeting="¡Bienvenido a ClyB'sness" />
      </section>
    </>
  )
}

export default App
