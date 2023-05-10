import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <p>ID: {id} </p>
        <p>NOMBRE: {nombre} </p>
        <p>PRECIO: {precio} </p>
        <img className='imgProducto' src={img} alt={nombre} />
        <button className='btnProducto' >Mas detalles</button>
    </div>
  )
}

export default Item