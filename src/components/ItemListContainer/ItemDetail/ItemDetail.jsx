import { useEffect, useState } from 'react';
import  {getProducts}  from '../../firebase/firebase';
import './ItemDetail.css'
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx'; 

const ListaProductos = () => {
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams();
    console.log('categoria:', categoryId);
    
        useEffect(() => {
            getProducts().then((products) => setProducts(products));
            console.log('Productos: ',products);
        },[])
    if (!products) {
        return <>
                <LoadingSpinner/>
            </>
    }else{
    return (
        <>
        {products.map((prod) => 
        <div className='cardProduct' key={prod.id}>
            <p className='nameProduct'>{prod.title}</p>
            <img src={prod.imgRoute} alt="" />
            <p className='priceProduct'>${prod.price}</p>
            <p className='categoryProduct'>{prod.category}</p>
            <button className='buttonProduct'><Link to={`/product/${prod.id}`}>Detalles</Link></button>
        </div> 
    )}
        </>
    );}
};

export default ListaProductos;