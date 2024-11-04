import { useContext,} from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom' ;
import { MaterialSymbolsLightDelete } from './MaterialSymbolsLightDelete.jsx'
import { CartContext } from '../context/cartContext.jsx';

export default function CartView() {

    const { cart, cartDelete, delete1Item } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <>
                <h1>No hay productos en el carrito</h1>
            </>
        );
    } else {
        return (
            <>
                <div id="fondoCarrito">
                    <div id='encabezadosCarrito'>
                        <h3>Producto</h3>
                        <h3>Precio</h3>
                        <h3>Categoría</h3>
                        <h3>Cantidad</h3>
                    </div>
                    {cart.map((prod) =>
                        <div className='cardCarrito' key={prod.id}>
                            <img src={prod.imgRoute} alt="" className='imgCarrito' />
                            <p className='nameCarrito'>{prod.title}</p>
                            <p className='priceCarrito'>${prod.price}</p>
                            <p className='categoryCarrito'>{prod.category}</p>
                            <p>{prod.quantity}</p>
                            <button className='deleteCarrito' onClick={() => delete1Item(prod.id)}><MaterialSymbolsLightDelete /></button>
                        </div>
                    )}
                    <Link to={'/checkout'}><button>Finalizar compra</button></Link>
                    <button onClick={cartDelete}>Borrar Carrito</button>
                </div>
            </>
        );
    }
    
}
