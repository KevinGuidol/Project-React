import './NavBar.css'
import { Link } from 'react-router-dom';
import SolarCartBold from './SolarCartBold';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function BarraDeNavegacion () {
    const {cart} = useContext(CartContext)
    const cartQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    const leftNumbCarrito = () => {
        if(cartQuantity <= 10) {
            return "69px"
        }else if (cartQuantity >= 100){
            return "58px"
        }else{
            return "63px" 
        }
    }
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
                <p style={{color:"black",position:"absolute",left:`${leftNumbCarrito()}`,top:"17px"}}>{cartQuantity}</p>
                <SolarCartBold/> </Link>
            </button>
        </div>
        </>
    )
        
    }