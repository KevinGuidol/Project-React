import CartShopping from './CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function BarraDeNavegacion () {
        return (
            <>
        <div id='navBar'>
            <div id='divIndex' className='botonesNavBar'>
                <button><Link to={'/'}>Home</Link> </button>
            </div>
            <div id='divContact' className='botonesNavBar'>
                <button><Link to={'/contact'}>Contacto</Link></button>
            </div>
            <div id='divProducts' className='botonesNavBar'>
                <button><Link to={'/products'}>Productos</Link></button>
            </div>
            <div>
                <h2 id='logo'>ClyB'sness</h2>
            </div>
            <div id='divShopcart' className='botonesNavBar'>
                <button><Link to={'/shopcart'}>Carrito</Link></button>
            </div>
        </div>
        </>
    )
        
    }