const productos = [
    {id: 1, nombre: "Yerba", precio: 350, img: "./img/yerba.jpg"},
    {id: 2, nombre: "Fideos", precio: 180, img: "./img/fideos.jpg"},
    {id: 3, nombre: "Arroz", precio: 200, img: "./img/arroz.jpg"},
    {id: 4, nombre: "Aceite", precio: 900, img: "./img/aceite.jpg"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

