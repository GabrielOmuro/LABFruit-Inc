import { useEffect, useState } from "react";
import Modal from "react-modal"
import Navbar from '../component/Navbar.jsx'
import './catProdutos.css'

function ProdutoCard({ produto }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="catModalcontainerP">
            <img src="../frutas, hortaliças e verduras.jpg" alt="" />
            <p>{produto.nome}</p>
            <p>{produto.precounitario}</p>
            <button onClick={openModal}>Mais Informações</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-content"
                className="catModalP"
            >
                <h2>Informações do produto</h2>
                <hr />
                <div>
                    <ul>
                        <div className="catDivisoriaSobreP">
                            <p>Sobre o produto</p>
                        </div>
                        <li>Nome: {produto.nome}</li>
                        <li>Descrição: {produto.descricao}</li>
                        <li>Preço-Unitário: {produto.precounitario}</li>
                        <li>Fornecedor: {produto.fornecedorP}</li>
                        <li>Tipo: {produto.tipo}</li>
                    </ul>
                </div>
                <button className="catBotaoP" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

function CatProdutos() {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [modalIsOpen1, setIsOpen] = useState(false);

    function openModal1() {
        setIsOpen(true);
    }

    function closeModal1() {
        setIsOpen(false);
    }

    useEffect(() => {
        const listaProdutosArmazenados = localStorage.getItem("listaProdutos");
        if (listaProdutosArmazenados) {
            setListaProdutos(JSON.parse(listaProdutosArmazenados));
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="catConteinerP">
                <div className="catFlexP">
                    {listaProdutos.map((produto, index) => (
                        <ProdutoCard key={index} produto={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatProdutos;