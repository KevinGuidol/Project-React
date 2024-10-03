import './cssViews/SingleProductView.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findProduct } from '../asyncMock';

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
    <h2>SOY UN SPINNER</h2></>);
  }
  return (
    <>
    <div id='cardProductSPV' key={product.id}>
        <p id='titleProductSPV'>{product.title}</p>
        <img id='imgProductSPV' src={product.imgRoute} alt="" />
        <p id='colorProductSPV'>Colores: {product.color.join(', ')}</p>
        <p id='brandProductSPV'>Marca: {product.brand}</p>
        <p id='garmetProductSPV'>Prenda: {product.garmet}</p>
        <p id='sizeProductSPV'>Talles: {product.size.join(', ')}</p>
        <p id='priceProductSPV'>${product.price}</p>
        <p id='categoryProductSPV'>Categoría: {product.category}</p>
    </div>
</>
)
}
