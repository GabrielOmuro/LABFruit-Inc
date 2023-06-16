import { Link } from "react-router-dom"
import './NavBar.css'

function NavBar(){
    return(
        <div className="Navbar">
            <img className="logo" src="./Logos/image.png" alt="LABFruit Inc" />
            <Link className="Link" to="/home">Home</Link>
            <Link className="Link" to="/CadastroDeProdutos">Cadastrar Produtos</Link>
            <Link className="Link" to="/CadastroDeEmpresas">Cadastrar Empresas</Link>
            <Link className="Link" to="/CatalogoDeProdutos">Catálogo de Produtos</Link>
            <Link className="Link" to="/CatalogoDeEmpresas">Lista de Empresas Cadastradas</Link>
        </div>
    )
}

export default NavBar