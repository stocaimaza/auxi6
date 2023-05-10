import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    const imgMarolio = "https://www.marolio.com.ar/sites/all/themes/theme1043/logo.png";
  return (
    <header>
        <img className="imgMarolio" src={imgMarolio} alt="Logo Marolio" />
        <ul>
            <li>Almacén</li>
            <li>Lácteos</li>
            <li>Limpieza</li>
        </ul>
        <CartWidget />
    </header>
  )
}

export default NavBar