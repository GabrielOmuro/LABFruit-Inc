import Navbar from '../component/Navbar.jsx'
import ReactInputMask from "react-input-mask"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

function CadProdutos() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [precounitario, setPrecounitario] = useState('')
    const [fornecedorP, setFornecedorP] = useState('')
    const [tipo, setTipo] = useState('')
    const navigate = useNavigate()

    const handleChange2 = (event) => {
        setTipo(event.target.value);
    };

    const handleChange1 = (event) => {
        setFornecedorP(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Opção selecionada:', tipo);

    };

    return (
        <div className="cadProdutos">
            <NavBar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Laranja"  onChange={(event) => setNome(event.target.value)}/>
                <label htmlFor="descricao">Descrição:</label>
                <input type="text" placeholder="Laranja tem vitamina A e C, além de conter fibras." onChange={(event) => setDescricao(event.target.value)}/>
                <label htmlFor="precoUnitario">Preço-Unitário:</label>
                <InputMask placeholder="R$___,__" className="precounitario" value={precounitario} mask="R$999,99" onChange={(event) => setPrecounitario(event.target.value)}/>
                <label htmlFor="tipo">Tipo:</label>
                <select name="tipo" id="tipo" value={tipo} onChange={handleChange2}>
                    <option value="">Selecione o Tipo:</option>
                    <option value="frutas">Frutas</option>
                    <option value="verduras">Verduras</option>
                    <option value="hortalicas">Hortaliças</option>
                </select>
                <div>
                    <label htmlFor="fornecedorP">Fornecedores parceiros:</label>
                    <select name="fornecedorP" id="fornecedorP" value={fornecedorP} onChange={handleChange1}>
                        <option value="">Selecione o Fornecedor:</option>
                        <option value="nomefantasia1">Grupo Barry</option>
                        <option value="nomefantasia2">Silvestri</option>
                        <option value="nomefantasia2">Garibaldi</option>
                    </select>
                </div>
                <button type="submit" className="cadBotao"  onClick={() => {
                    if (nome === '' && descricao === '' && precounitario === '' && tipo === '' && fornecedor === '') {
                        alert('AVISO: Preencha todos os campos!')
                    } else {
                        const listaProdutos = JSON.parse(localStorage.getItem("listaProdutos")) || [];
                        if (!Array.isArray(listaProdutos)) {
                            listaProdutos = [];
                        }
                        listaProdutos.push(produtos)
                        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos))
                        alert('AVISO: Produto cadastrado com sucesso!')
                        navigate("/home")
                    }
                }}>ENVIAR</button>
            </form>
        </div>
    )
}
export default CadProdutos