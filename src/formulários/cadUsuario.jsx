function CadUsuario() {

    return (
        <div className="cadUsuarioContainer">
            <h2>Cadastre-se</h2><br />
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email"/>
                <label htmlFor="senha">Senha:</label>
                <input type="password"/>
                <button type="submit"  onClick={() => {if(email === ''){
                     alert('AVISO: Preencha o campo de email!')
                     return false
                     }if(senha === ''){
                        alert('AVISO: Preencha o campo de senha!')
                        return false
                     }else{
                        alert('AVISO: Login efetuado com sucesso!')
                        navigate("/login")
                     }
                     }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadUsuario