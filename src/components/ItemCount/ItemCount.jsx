import { useContext, useState } from "react"
import './ItemCount.css'
import {CartContext, CartProvider} from "../../context/cartWidgetContext"

const ItemCount = (stock, product) => {
    var stock = stock.stock
    if (stock != 0) {
        const [count , setCount] = useState(1)
        console.log(stock);
        const sumarProd = () => {
            if(count < stock){
                setCount(count + 1)
            }
        }
        const restarProd = () => {
            if(count > 1) {
                setCount(count - 1)
            }
        }
        const compraProd = () => {
            const [cart, , addItem] = useContext(CartProvider)
            addItem(product)
            console.log(cart);
        }
        return(
            <div id="seccionCompra">
                <button onClick={restarProd} className="botonesCompra">-</button>
                <p>{count}</p>
                <button onClick={sumarProd} className="botonesCompra">+</button>
                <button onClick={compraProd} className="botonesCompra">Comprar</button>
            </div>
        )
    }else {
        return (
            <>
            <h2 id="NoStock">
                Lo sentimos, no tenemos stock de este producto en este momento
            </h2>
            </>
        )
    }
} 

export default ItemCount