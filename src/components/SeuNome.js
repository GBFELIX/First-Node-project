import { useState } from "react"
function SeuNome(){

    const [name, setName] = useState()

    return(
        <div>
            <input type="text" placeholder="Digite seu nome aqui" id="name-a" name="name-a" onChange={(e) => setName(e.target.value)}></input>
            <br></br>
            <h1>olá {name} tudo bem?</h1>
        </div>
    )
    
}
export default SeuNome