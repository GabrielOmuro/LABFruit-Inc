function CadUsuario() {

    return (
        <div className="cadUsuarioContainer">
            <h2>Cadastre-se</h2><br />
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email"/>
                <label htmlFor="senha">Senha:</label>
                <input type="password"/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default CadUsuario