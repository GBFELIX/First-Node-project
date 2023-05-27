import { useState } from "react"

function Condicional() {
    const [Email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(Email)
    }
    function limpar(){
        setUserEmail("")
    }

    return (
        <div>
            <h2>Cadastre seu Email</h2>
            <form>
                <input type="email" placeholder="Digite seu Email"  onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <button type="submit" onClick={enviarEmail}>Cadastrar</button>
                <button onClick={limpar}>Limpar campo</button>
                <br></br>
                {userEmail &&  (
                    <div>
                        <p>O email do Usuário é {userEmail}</p>
                    </div>
                )}
            </form>
           
        </div>
    )
}
export default Condicional