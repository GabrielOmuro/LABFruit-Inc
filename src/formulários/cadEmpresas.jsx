import Navbar from '../component/Navbar.jsx'
import ReactInputMask from "react-input-mask"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './cadProdutos.css'

function CadEmpresas() {
    const { register, handleSubmit, setValue, setFocus } = useForm()
    const [razaosocial, setRazaosocial] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [nomefantasia, setNomefantasia] = useState('')
    const [celular, setCelular] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const navigate = useNavigate()
    const empresa = {
        razaosocial: razaosocial,
        cnpj: cnpj,
        nomefantasia: nomefantasia,
        celular: celular,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
    }
    
    const buscarCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        setCep(cep);
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)

                .then((response) => response.json())
                .then((dados) => {
                    console.log(dados);
                    setLogradouro(dados.logradouro);
                    setBairro(dados.bairro);
                    setCidade(dados.localidade);
                    setEstado(dados.uf);
                    setFocus(dados.numero)
                })
                .catch((error) => {
                    console.log("Ops! Ocorreu um erro!", error);
                })
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        buscarCep()
    }


    return (
        <div className="cadEmpresas">
            <Navbar />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="razaosocial">Razão Social:</label>
                <input type="text" name="razaosocial" value={razaosocial} onChange={(event) => setRazaosocial(event.target.value)} />
                <label htmlFor="cnpj">CNPJ:</label>
                <InputMask className="cnpj" value={cnpj} mask="99.999.999/9999-99" onChange={(event) => setCnpj(event.target.value)} />
                <label htmlFor="nomefantasia">Nome Fantasia:</label>
                <input type="text" placeholder="Digite o nome fantasia da empresa" value={nomefantasia} onChange={(event) => setNomefantasia(event.target.value)} />
                <label htmlFor="celular">Celular:</label>
                <InputMask mask="+99 99 99999-9999" value={celular} onChange={(event) => setCelular(event.target.value)} />
                <label htmlFor="cep">CEP:</label>
                <InputMask mask="99.999-999" name="cep" value={cep} onBlur={buscarCep} onChange={(event) => setCep(event.target.value)} />
                <label htmlFor="logradouro">Logradouro:</label>
                <input type="text" value={logradouro} onChange={(event) => setLogradouro(event.target.value)} />
                <label htmlFor="numero">Número:</label>
                <input type="text" value={numero} onChange={(event) => setNumero(event.target.value)} />
                <label htmlFor="bairro">Bairro:</label>
                <input type="text" value={bairro} onChange={(event) => setBairro(event.target.value)} />
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" value={cidade} onChange={(event) => setCidade(event.target.value)} />
                <label htmlFor="estado">Estado:</label>
                <input type="text" value={estado} onChange={(event) => setEstado(event.target.value)} />
                <button type="submit" onClick={() => {
                    if (razaosocial === '' && cnpj === '' && nomefantasia === '' && celular === '' && cep === '' && logradouro === '' && numero === '' && bairro === '' && cidade === '' && estado === '') {
                        alert('AVISO: Preencha todos os campos!')
                    } else {
                        let listaEmpresas = JSON.parse(localStorage.getItem("listaEmpresas")) || [];
                        if (!Array.isArray(listaEmpresas)) {
                            listaEmpresas = [];
                        }
                        listaEmpresas.push(empresa)
                        localStorage.setItem("listaEmpresas", JSON.stringify(listaEmpresas))
                        alert('AVISO: Empresa cadastrado com sucesso!')
                        navigate("/home")
                    }
                }}>ENVIAR</button>
            </form>
        </div>
    )
}

export default CadEmpresas