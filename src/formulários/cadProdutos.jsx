import Navbar from '../component/Navbar.jsx'
import ReactInputMask from 'react-input-mask'

function CadProdutos() {
    return (
        <div className="cadProdutos">
            <NavBar />
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Laranja" />
                <label htmlFor="descricao">Descrição:</label>
                <input type="text" placeholder="Laranja tem vitamina A e C, além de conter fibras." />
                <label htmlFor="precoUnitario">Preço-Unitário:</label>
                <InputMask placeholder="R$___,__" className="precounitario" value={precounitario} mask="R$999,99" />
                <label htmlFor="tipo">Tipo:</label>
                <select name="tipo" id="tipo" value={tipo}>
                    <option value="">Selecione o Tipo:</option>
                    <option value="frutas">Frutas</option>
                    <option value="verduras">Verduras</option>
                    <option value="hortalicas">Hortaliças</option>
                </select>
                <div>
                    <label htmlFor="fornecedorP">Fornecedores parceiros:</label>
                    <select name="fornecedorP" id="fornecedorP" value={fornecedorP}>
                        <option value="">Selecione o Fornecedor:</option>
                        <option value="nomefantasia1">Grupo Barry</option>
                        <option value="nomefantasia2">Silvestri</option>
                        <option value="nomefantasia2">Garibaldi</option>
                    </select>
                </div>
                <button type="submit" className="cadBotao">ENVIAR</button>
            </form>
        </div>
    )
}
export default CadProdutos