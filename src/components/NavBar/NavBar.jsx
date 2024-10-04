import './NavBar.css'
import { Link } from 'react-router-dom';

export default function BarraDeNavegacion () {
        return (
            <>
        <div id='navBar'>
            <button id='divIndex' className='botonesNavBar'>
                <Link to={'/'}>Home</Link>
            </button>
            <button id='divContact' className='botonesNavBar'>
                <Link to={'/category/Urbano'} >Urbano</Link>
            </button>
            <button id='divContact' className='botonesNavBar'>
                <Link to={'/category/Deportes'} >Deportivo</Link>
            </button>
            <div>
                <Link to={'/'}><h2 id='logo'>ClyB'sness</h2></Link>
            </div>
            <button id='divShopcart' className='botonesNavBar'>
                <Link to={'/shopcart'}>Carrito (2)</Link>
            </button>
        </div>
        </>
    )
        
    }