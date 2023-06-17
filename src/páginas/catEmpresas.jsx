import { useEffect, useState } from "react";
import Modal from "react-modal"
import Navbar from '../component/Navbar.jsx'
import './catEmpresas.css'

function ProdutoCard({ empresa }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="catModalcontainerE">
            <li>Nome-Fantasia: {empresa.nomefantasia}</li>
            <li>Celular: {empresa.celular}</li>
            <li>CNPJ: {empresa.cnpj}</li>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-content"
                className="catModalE"
            >
                <h2>Informações da empresa</h2>
                <hr />
                <div>
                    <ul>
                        <div className="catDivisoriaSobreE">
                            <p>Sobre a empresa</p>
                        </div>
                        <li>Nome-Fantasia: {empresa.nomefantasia}</li>
                        <li>Razão-Social: {empresa.razaosocial}</li>
                        <li>CNPJ: {empresa.cnpj}</li>
                        <li>Celular: {empresa.celular}</li>
                        <p className="catDivisoriaEndereco">Sobre o Endereço da empresa</p>
                        <li>Cep: {empresa.cep}</li>
                        <li>Estado: {empresa.estado}</li>
                        <li>Cidade: {empresa.cidade}</li>
                        <li>Bairro: {empresa.bairro}</li>
                        <li>Logradouro: {empresa.logradouro}</li>
                        <li>Número: {empresa.numero}</li>
                    </ul>
                </div>
                <button className="catBotaoE" onClick={closeModal}>Close</button>
            </Modal>
            <button className="catBotaoE" onClick={openModal}>Mais informações</button>
        </div>
    );
}

function CatProdutos() {
    const [listaEmpresas, setListaEmpresas] = useState([]);
        const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const listaEmpresasArmazenadas = localStorage.getItem("listaEmpresas");
        if (listaEmpresasArmazenadas) {
            setListaEmpresas(JSON.parse(listaEmpresasArmazenadas));
        }
    }, []);

    return (
        <div className="catConteinerE">
            <Navbar />
            <div className="catFlexE">
                {listaEmpresas.map((empresa, index) => (
                    <ProdutoCard key={index} empresa={empresa} />
                ))}
            </div>
        </div>
    );
}

export default CatProdutos;