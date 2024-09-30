import { useEffect, useState } from 'react';
import './ItemDetail.css'
const ListaProductos = () => {
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=50');
                const data = await response.json();
                setProducts(data.results);
            }catch (error) {
            console.error('Error:', error);
            }
        };

        fetchProducts();
    },[]);

    return (
        <>
        {products.map((product) => 
        <div className='cardProduct' key={product.id}>
            <img src={product.thumbnail} className='imgProduct' />
            <p className='nameProduct'>{product.title}</p>
            <p className='priceProduct'>${product.price}</p>
        </div> 
    )}
        </>
    );
};

export default ListaProductos;