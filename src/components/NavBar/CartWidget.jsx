import { useContext, useEffect, useState } from 'react'
import './CartWidget.css'
import { MaterialSymbolsLightDelete } from './MaterialSymbolsLightDelete.jsx'
import { CartContext } from '../context/cartContext.jsx';

export default function CartView() {

    const { saveCart, pruebaLS, cart, cartDelete } = useContext(CartContext);

    return (<>
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
                    <button className='deleteCarrito'><MaterialSymbolsLightDelete /></button>
                </div>)}
            <button >Finalizar compra</button>
            <button onClick={cartDelete}>Borrar Carrito</button>
        </div>
    </>
    )
}
