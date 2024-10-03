import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock.js';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
const ListaProductos = () => {
    const [prod, setProd] = useState([])
    useEffect(()=>{
        getProduct.then((data) => setProd(data));
    },[]);

    return (
        <>
        {prod.map((prod) => 
        <div className='cardProduct' key={prod.id}>
            <p className='nameProduct'>{prod.title}</p>
            <img src={prod.imgRoute} alt="" />
            <p className='priceProduct'>${prod.price}</p>
            <p className='categoryProduct'>{prod.category}</p>
            <button className='buttonProduct'><Link to={`/product/${prod.id}`}>Detalles</Link></button>
        </div> 
    )}
        </>
    );
};

export default ListaProductos;