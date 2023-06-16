export default function Login() {
    return (
        <div>
            <h2 className="loginOucadastro">Faça seu Login ou Cadastre-se</h2>
            <div className="login">
                <form>
                    <label htmlFor="email">Email:</label>
                    <input className="email" name="email" minLength={9} value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Digite seu email aqui" />
                    <label htmlFor="senha">Senha:</label>
                    <input className="senha" value={senha} name="senha" onChange={(event) => setSenha(event.target.value)} type="password" placeholder="Digite sua senha aqui" />
                    <Link className="Link" to="/Cadastrar">Cadastre-se</Link>
                    <button type="submit" onClick={() => {if(email === ''){
                     alert('AVISO: Preencha o campo de email!')
                     return false
                     }if(senha === ''){
                        alert('AVISO: Preencha o campo de senha!')
                        return false
                     }else{
                        alert('AVISO: Login efetuado com sucesso!')
                        navigate("/home")
                     }
                     }}>Entrar</button>
                </form>
            </div>
        </div>
    )
}