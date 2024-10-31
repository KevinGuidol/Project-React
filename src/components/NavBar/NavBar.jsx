import './NavBar.css'
import { Link } from 'react-router-dom';
import SolarCartBold from './SolarCartBold';

export default function BarraDeNavegacion () {
    const lengthCarrito = 12
    const leftNumbCarrito = lengthCarrito < 10 ? "69px" : "63px" 
        return (
            <>
        <div id='navBar'>
            <button className='botonesNavBar'>
                <Link to={'/'}>Home</Link>
            </button>
            <button className='botonesNavBar'>
                <Link to={'/category/Urbano'} >Urbano</Link>
            </button>
            <button className='botonesNavBar'>
                <Link to={'/category/Deportes'} >Deportivo</Link>
            </button>
            <div>
                <Link to={'/'}><h2 id='logo'>ClyB'sness</h2></Link>
            </div>
            <button id='cartButton' className='botonesNavBar'>
                <Link to={'/cart'}>
                <p style={{color:"black",position:"absolute",left:`${leftNumbCarrito}`,top:"17px"}}>{lengthCarrito}</p>
                <SolarCartBold/> </Link>
            </button>
        </div>
        </>
    )
        
    }