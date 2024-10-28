import './CartWidget.css'
import { MaterialSymbolsLightDelete } from './MaterialSymbolsLightDelete'

export default function CartView () {
    const prodCarrito = [
        {
            id:1,
            title:'Remera oversize ',
            color:['Violeta','Negro','Rojo','Blanco'],
            size:['Small','Medium','Large','Extra Large'],
            price:1000,
            brand:'Genérica',
            category:'Urbano',
            garmet:'Remera',
            stock: 5 ,
            imgRoute: 'https://storana.com.ar/wp-content/uploads/2024/07/Remera-Violeta-1.png'
        },
        {
            id:2, 
            title:'Remera oversize Nike ', 
            color:['Naranja','Negro','Rojo'],
            size:['Small','Medium','Large','Extra Large'], 
            price:1000, 
            brand:'Nike', 
            category:'Urbano', 
            garmet:'Remera', 
            stock: 2 ,
            imgRoute: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uyUenGWW7dzsXjhjTjlrc6hmhDQ1mc14oA&s'
        },{
            id:3, 
            title:'Nike Jordan 1', 
            color:['Negro','Blanco','Rojo'], 
            size:[39,40,41,42],
            price:1000, 
            brand:'Nike', 
            category:'Urbano', 
            garmet:'Calzado', 
            stock: 7 ,
            imgRoute: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Hzksuy2cfhEmHi4iAQ-AVTZV2eiV8ACa028DpLG7cR_seWMyFLKlCgJwMFDcVcHZygY&usqp=CAU'
        },{
            id:4, 
            title:'Nike Airforce 1', 
            color:['Negro','Blanco'],
            size:[40,41,42],
            price:1000, 
            brand:'Nike', 
            category:'Urbano', 
            garmet:'Calzado', 
            stock: 3 ,
            imgRoute: 'https://http2.mlstatic.com/D_NQ_NP_615407-MLC46970819188_082021-O.webp'
        }
    ]    
    return( <>
        <div id="fondoCarrito">
        <div>
            <h3>Producto</h3>
            <h3>Precio</h3>
            <h3>Categoría</h3>
            <h3>Cantidad</h3>
        </div>
            {prodCarrito.map((prod)=> <div className='cardCarrito' key={prod.id}>
                <img src={prod.imgRoute} alt="" className='imgCarrito' />
                <p className='nameCarrito'>{prod.title}</p>
                <p className='priceCarrito'>${prod.price}</p>
                <p className='categoryCarrito'>{prod.category}</p>
                <p>(Cantidad)</p>
                <button className='deleteCarrito'><MaterialSymbolsLightDelete/></button>
            </div> )}
        </div>
        </>
    )
}
