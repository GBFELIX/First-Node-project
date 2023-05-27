import { useState } from 'react'

function Form(){
    function cadastrar(e){
        e.preventDefault()
        alert("Usuário " + name + "foi cadastrado com a senha: " + password)
        
   }
   const [name, setName] = useState()
   const [password, setPassword] = useState()

    return(
        <div>
            <h1>Formulario de cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <br></br>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
 }
 export default Form