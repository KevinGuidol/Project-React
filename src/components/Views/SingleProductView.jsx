import './cssViews/SingleProductView.css'
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { findProduct } from '../firebase/firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { CartContext } from '../context/cartContext';

export default function ProductView() {
  const [product, setProduct] = useState();
  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();
  const {addToCart} = useContext(CartContext)

  //Funciones de botones de cantidad

  const menorQ = () => {
    if (cantidad > 1) {
      setCantidad(cantidad-1);
    }else {
      console.error('No se puede disminuir más la cantidad')
    }
  }
  const mayorQ = (stock) => {
    if (cantidad < stock){
      setCantidad(cantidad+1);
    }else {
      console.error('No se aumentar más la cantidad');
    }
  }

  useEffect(() => {
      //creamos una funcion async para poder pedir y asignar el producto
      const findAndSetProduct = async () => {
        const prod = await findProduct(id);
        setProduct(prod);
    }
    //llamamos la funcion para asingar el producto deseado
    findAndSetProduct();
  }, []);

  if (!product) {
    //retornamos un spinner
    return (<>
    <LoadingSpinner style={{margin:"auto"}}/>
    </>);
  }
  return (
    <>
    <div id='cardProductSPV' key={product.id}>
        <p id='titleProductSPV'>{product.title}</p>
        <img id='imgProductSPV' src={product.imgRoute} alt="" />
        <p id='brandProductSPV'>Marca: {product.brand}</p>
        <p id='garmetProductSPV'>Prenda: {product.garmet}</p>
        <p id='sizeProductSPV'>Talles: {product.size.join(', ')}</p>
        <p id='priceProductSPV'>${product.price}</p>
        <p id='categoryProductSPV'>Categoría: {product.category}</p>
        <div id='divCompra'>
          <button className='botonesCompra' onClick={menorQ}>-</button>
          <p>{cantidad}</p>
          <button className='botonesCompra' onClick={() => mayorQ(product.stock)}>+</button>
        </div>
        <button className='botonesCompra' onClick={() => addToCart(product , cantidad)}>Añadir al carrito</button>
    </div>
    
</>
)
}
