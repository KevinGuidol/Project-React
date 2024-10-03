export const getProduct = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve([
            {
                id:1,
                title:'Remera oversize ',
                color:['Violeta','Negro','Rojo','Blanco'],
                size:['Small','Medium','Large','Extra Large'],
                price:1000,
                brand:'Genérica',
                category:'Urbano',
                garmet:'Remera',
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
                imgRoute: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uyUenGWW7dzsXjhjTjlrc6hmhDQ1mc14oA&s'
            },{
                id:3, 
                title:'Adidas Jordan 1', 
                color:['Negro','Blanco'], 
                size:[39,40,41,42],
                price:1000, 
                brand:'Adidas', 
                category:'Urbano', 
                garmet:'Calzado', 
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
                imgRoute: 'https://http2.mlstatic.com/D_NQ_NP_615407-MLC46970819188_082021-O.webp'
            },{
                id:5, 
                title:'Nike Airmax 90', 
                color:['Negro','Blanco'],
                size:[39,40,42], 
                price:1000, 
                brand:'Nike', 
                category:'Deportes', 
                garmet:'Calzado', 
                imgRoute: 'https://nikearprod.vtexassets.com/arquivos/ids/907876/FD5810_101_A_PREM.jpg?v=638493972400600000'
            },{
                id:6, 
                title:'Puma Resolve Street', 
                color:['Negro','Blanco'],
                size:[38,39,40,41,42,43],
                price:1000, 
                brand:'Puma', 
                category:'Deportes', 
                garmet:'Calzado', 
                imgRoute: 'https://rossettiar.vtexassets.com/arquivos/ids/518538-800-auto?v=638297794593400000&width=800&height=auto&aspect=true'
            },{
                id:7, 
                title:'Puma Future 7 Ultimate', 
                color:['Negro','Blanco'],
                size:[39, 40, 42], 
                price:1000, 
                brand:'Puma', 
                category:'Deportes', 
                garmet:'Calzado', 
                imgRoute: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/107995/01/sv01/fnd/ARG/fmt/png'
            },{
                id:8, 
                title:'Remera Adidas Negra', 
                color:['Negro','Blanco'],
                size:['Small','Medium','Large','Extra Large'], 
                price:1000, 
                brand:'Adidas', 
                category:'Deportes', 
                garmet:'Remera', 
                imgRoute: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ef341ae0c9874ef0bdfcaed300baa0fe_9366/Remera_de_Entrenamiento_Techfit_Negro_HK2337_01_laydown.jpg'
            },{
                id:9, 
                title:'Remera Puma Rosada', 
                color:['Negro','Blanco'],
                size:['Small','Medium','Large','Extra Large'], 
                price:1000, 
                brand:'Puma', 
                category:'Deportes', 
                garmet:'Remera', 
                imgRoute: 'https://http2.mlstatic.com/D_NQ_NP_846570-MLA69816073827_062023-O.webp'
            },{
                id:10, 
                title:'Pantalón Nike Swoosh', 
                color:['Negro','Blanco'],
                size:['Small','Medium','Large','Extra Large'], 
                price:1000, 
                brand:'Nike', 
                category:'Deportes',
                garmet:'Pantalón', 
                imgRoute: 'https://acdn.mitiendanube.com/stores/004/646/955/products/whatsapp-image-2024-08-01-at-2-33-03-am-8158943e7cea14489917224907024311-480-0.jpeg'
            },{
                id:11, 
                title:'Pantalón Puma Essentials', 
                color:['Negro','Blanco'],
                size:['Small','Medium','Large','Extra Large'], 
                price:1000, 
                brand:'Puma', 
                category:'Deportes', 
                garmet:'Pantalón', 
                imgRoute: 'https://sportotalar.vtexassets.com/arquivos/ids/554634-800-450?v=638580584456930000&width=800&height=450&aspect=true'
            },{
                id:12, 
                title:'Short Puma Creativity', 
                color:['Negro','Blanco'],
                size:['Small','Medium','Large','Extra Large'], 
                price:1000, 
                brand:'Puma', 
                category:'Deportes', 
                garmet:'Pantalón', 
                imgRoute: 'https://newsport.vtexassets.com/arquivos/ids/19043468/65895213-A.jpg?v=638532855722570000'
            },{
                id:13, 
                title:'Botines Crazyfast', 
                color:['Negro','Blanco'], 
                size:[40,41,42],
                price:1000, 
                brand:'Adidas', 
                category:'Deportes', 
                garmet:'Calzado', 
                imgRoute: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaa64c2b0/products/ADGY7425/ADGY7425-1.JPG'
            },{
                id:14, 
                title:'Medias Nike pack x3', 
                color:['Negro','Blanco'], 
                size:'Medium', 
                price:1000, 
                brand:'Nike', 
                category:'Deportes', 
                garmet:'Medias', 
                imgRoute: 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/64g4k2hxn0ej0f7ctfq6jyp1sxos/77e513bcd3762f47919c96f85e400038a39acdbb0d268f51c1fd98fe5327bd96'
            },{
                id:15, 
                title:'Medias Adidas pack x3',
                color:['Negro','Blanco'], 
                size:'Medium', 
                price:1000, 
                brand:'Adidas', 
                category:'Deportes', 
                garmet:'Medias', 
                imgRoute: 'https://redsport.vtexassets.com/arquivos/ids/1088279-500-auto?v=637668148750300000&width=500&height=auto&aspect=true'
            },
        ])
    }, 2000);
})

export const findProduct = async (id) => {
    const prods = await getProduct;
    return prods.find((prod) => prod.id == id);
}