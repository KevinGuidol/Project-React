import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(false);

export const CartProvider = ({ children }) => {

    //↓↓↓↓ Funciones para cuando se agregar al carrito ↓↓↓↓

    //Guardamos el carrito (Cada vez que sumamos un producto)
    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('El carrito fue actualizado');
    }
    //Agregamos la cantidad al object del producto (Cada vez que sumamos un producto) 
    const addToCart = (prod, cantidad) => {
        const idProd = prod.id
        const findedProd = cart.find((el) => el.id === idProd)
        const newProd = {
            ...prod,
            quantity: cantidad
        }
        console.log(newProd);
        if (findedProd) {
            setCart(...cart, findedProd.quantity + cantidad)
            saveCart()
        }
        else {
            setCart([...cart, newProd])
            saveCart()
        }
    }



    //↓↓↓↓ Funciones para la vista del carrito ↓↓↓↓

    //Cargamos el carrito desde Local Storage o en todo caso, devolvemos un array vacío (Cuando entramos al carrito).
    const [cart, setCart] = useState(() => {
        const cartLS = localStorage.getItem('cart');
        return cartLS ? JSON.parse(cartLS) : []
    });


    //Prueba de rendimiento
    const pruebaLS = () => {
        const productos = [{
            id: 1,
            title: "1",
            imgRoute: "https://i.redd.it/cfd2cg8xib4a1.jpg",
            price: "1",
            category: "1",
            quantity: 3
        }]
        localStorage.setItem('cart', JSON.stringify(productos));
        setCart(productos)
        console.log('Productos de prueba agregados');

    }


    const cartDelete = () => {
        setCart([])
        localStorage.removeItem('cart')
    }


    return (
        <CartContext.Provider value={{
            cart,
            saveCart,
            pruebaLS,
            cartDelete,
            addToCart
        }}>

            {children}
        </CartContext.Provider>
    )
}