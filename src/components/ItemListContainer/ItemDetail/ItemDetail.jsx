import { useEffect, useState } from 'react';
import { filterProduct, getProduct } from '../../asyncMock.js';
import './ItemDetail.css'
import { Link, useParams } from 'react-router-dom';
const ListaProductos = () => {
    const [prod, setProd] = useState([])
    
    const {categoryId} = useParams();
    console.log('categoria:', categoryId);
    
    if (!categoryId) {        
        useEffect(()=>{
            getProduct.then((data) => setProd(data));
        },[categoryId]);
    }else {

        useEffect(() => {
            //creamos una funcion async para poder pedir y asignar el producto
            const filterAndSetProduct = async () => {
                const prod = await filterProduct(categoryId);
                setProd(prod);
            }
            //llamamos la funcion para asingar el producto deseado
            filterAndSetProduct();
        }, [categoryId]);
        
    }
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