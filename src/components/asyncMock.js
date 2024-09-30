export const getProduct = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve({id:1, title:'remera', price:1000, category:'deportes'})
    }, 2000);
})