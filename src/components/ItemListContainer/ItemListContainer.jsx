import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [])


    return (
        <>
            <h2 style={{ textAlign: "center" }}> {greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer