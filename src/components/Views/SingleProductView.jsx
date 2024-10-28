import './cssViews/SingleProductView.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { findProduct } from '../firebase/firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function ProductView() {
  const [product, setProduct] = useState();

  const { id } = useParams();

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
    //retornar un spinner
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
        <ItemCount stock={product.stock} product={product} />
    </div>
    
</>
)
}
