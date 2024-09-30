import {useEffect, useState } from 'react';
import { getProduct } from '../asyncMock';
import ListaProductos from './ItemDetail/ItemDetail';
import './ItemListContainer.css';

export default function ItemContainer () {
    const [remera, setRemera] = useState({});

    useEffect(()=>{
        getProduct.then((data) => setRemera(data));
        console.log(remera);
        
    },[])
    return (
        <>
        <section className="Cards">
            <h2>¡Hola! Soy una {remera.title}, mi ID es {remera.id}, tengo un precio de ${remera.price} y estoy dentro de la categoría {remera.category}</h2>
            <ListaProductos/>
        </section>
        </>
    )
}