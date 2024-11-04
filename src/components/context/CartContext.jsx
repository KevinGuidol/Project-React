import { useState } from "react";
import { createContext } from "react";
import {notify} from '../../App'

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
        const idProd = prod.id;
        console.log(cart);
    
        // Buscamos si el producto ya existe en el carrito
        const foundProd = cart.find((el) => el.id === idProd);
        const newProd = {
            ...prod,
            quantity: cantidad
        };
        console.log(newProd);
    
        if (foundProd) {
            // Si el producto existe, actualizamos su cantidad
            const updatedCart = cart.map((el) => 
                el.id === idProd ? { ...el, quantity: el.quantity + cantidad } : el
            );
            setCart(updatedCart);
        } else {
            // Si el producto no existe, lo añadimos al carrito
            setCart([...cart, newProd]);
        }
    
        // Guardamos el carrito después de actualizar
        saveCart();
        notify('success','Se agregó el producto al carrito');
    };
    



    //↓↓↓↓ Funciones para la vista del carrito ↓↓↓↓

    //Cargamos el carrito desde Local Storage o en todo caso, devolvemos un array vacío (Cuando entramos al carrito).
    const [cart, setCart] = useState(() => {
        const cartLS = localStorage.getItem('cart');
        return cartLS ? JSON.parse(cartLS) : []
    });


    const cartDelete = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    const delete1Item = (idProd) => {
        // Busca el producto en el carrito
        const foundProd = cart.find((el) => el.id === idProd);
    
        if (foundProd) {
            // Si el producto existe, actualizamos su cantidad
            const updatedCart = cart.map((el) => 
                el.id === idProd 
                    ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 0 } // Decrementar solo si es mayor que 1
                    : el
            );
    
            // Filtrar productos con cantidad 0 (opcional)
            const filteredCart = updatedCart.filter((el) => el.quantity > 0);
    
            // Actualizar el estado del carrito
            setCart(filteredCart);
    
            // Guardar el carrito después de actualizar
            saveCart();
        }
    };
    

    return (
        <CartContext.Provider value={{
            cart,
            saveCart,
            cartDelete,
            addToCart,
            delete1Item
        }}>

            {children}
        </CartContext.Provider>
    )
}