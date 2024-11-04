import { useEffect, useState } from 'react';
import { getProducts } from '../../firebase/firebase';
import './ItemDetail.css'
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';

const ListaProductos = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    console.log('categoria:', categoryId);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const allProducts = await getProducts();
                if (categoryId) {
                    const filteredProducts = allProducts.filter((prod) => prod.category === categoryId);
                    setProducts(filteredProducts);
                } else {
                    setProducts(allProducts);
                }
            } catch (error) {
                console.error('Error al encontrar productos', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <>
        <LoadingSpinner/>
        </>
    } else {
        return (
            <>
                {products.map((prod) =>
                    <div className='cardProduct' key={prod.id}>
                        <p className='nameProduct'>{prod.title}</p>
                        <div className='divImg'>
                        <img src={prod.imgRoute} alt="" />
                        </div>
                        <p className='priceProduct'>${prod.price}</p>
                        <p className='descriptionProduct'>{prod.description}</p>
                        <button className='buttonProduct'><Link to={`/product/${prod.id}`}>Detalles</Link></button>
                    </div>
                )}
            </>
        );
    }
};

export default ListaProductos;