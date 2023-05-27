import Button from "./Button"
function Evento(){
    function MeuEvento(e){
        e.preventDefault()
        alert('funcionou')
    }
    return(
        <div>
            <p>Clique no botão</p>
            <Button event={MeuEvento} text="Primeiro Evento"/>
        </div>
    )
}
export default Evento