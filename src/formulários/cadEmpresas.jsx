import Navbar from '../component/Navbar.jsx'

function CadEmpresas() {
    return (
        <div className="cadEmpresas">
            <NavBar />
            <form>
                <label htmlFor="razaosocial">Razão Social:</label>
                <input type="text" name="razaosocial" value={razaosocial}/>
                <label htmlFor="cnpj">CNPJ:</label>
                <InputMask className="cnpj" value={cnpj} mask="99.999.999/9999-99" />
                <label htmlFor="nomefantasia">Nome Fantasia:</label>
                <input type="text" placeholder="Digite o nome fantasia da empresa" value={nomefantasia}/>
                <label htmlFor="celular">Celular:</label>
                <InputMask mask="+99 99 99999-9999" value={celular}/>
                <label htmlFor="cep">CEP:</label>
                <InputMask mask="99.999-999" name="cep" value={cep}/>
                <label htmlFor="logradouro">Logradouro:</label>
                <input type="text"/>
                <label htmlFor="numero">Número:</label>
                <input type="text" value={numero}/>
                <label htmlFor="bairro">Bairro:</label>
                <input type="text" value={bairro}/>
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" value={cidade}/>
                <label htmlFor="estado">Estado:</label>
                <input type="text" value={estado}/>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    )
}

export default CadEmpresas