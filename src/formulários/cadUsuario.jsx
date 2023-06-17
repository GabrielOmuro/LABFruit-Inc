import './cadUsuario.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

function CadUsuario() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className="cadUsuarioContainer">
            <h2>Cadastre-se</h2><br />
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor="senha">Senha:</label>
                <input type="password" onChange={(event) => setSenha(event.target.value)}/>
                <button type="submit"  onClick={() => {if(email === ''){
                     alert('AVISO: Preencha o campo de email!')
                     return false
                     }if(senha === ''){
                        alert('AVISO: Preencha o campo de senha!')
                        return false
                     }else{
                        alert('AVISO: Cadastro efetuado com sucesso!')
                        navigate("/login")
                     }
                     }}>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadUsuario