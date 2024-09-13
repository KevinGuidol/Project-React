import CartShopping from './CartWidget';
import './NavBar.css'

export default function BarraDeNavegacion ({index, contact, shopcart, className}) {

    if (shopcart.includes('/')){
        console.log('Es ruta');
        return (
            <>
        <div id='navBar'>
            <div id='divIndex' className='botonesNavBar'>
                <a href="">{index}</a>
            </div>
            <div id='divContact' className='botonesNavBar'>
                <a href=''>{contact}</a>
            </div>
            <div>
                <h2 id='logo'>ClyB'sness</h2>
            </div>
            <div id='divShopcart' className='botonesNavBar'>
                <CartShopping/>
            </div>
        </div>
        </>
    )
    }else {
        console.log('Es String');
        return (
            <>
                <div id='navBar'>
                    <div id='divIndex' className='botonesNavBar'>
                        <a href="#">{index}</a>
                    </div>
                    <div id='divContact' className='botonesNavBar'>
                        <a href='../../pages/contactos'>{contact}</a>
                    </div>
                    <div id='divShopcart' className='botonesNavBar'>
                        <a href='../../pages/carrito'><img src={shopcart} alt="" /></a>
                    </div>
                </div>
        </>
    )
        
    }
}