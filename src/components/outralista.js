function OutraLista(){
    const coisas = ['React', 'Python', 'Angular']
    return(
        <div>
            <h3>Criando lista diferenciada</h3>
            {coisas.length > 0 ?(
                coisas.map((item, index) => <p key={index}>{item}</p>) 
            ) : (
                <p>Não há itens na lista!</p>
            )
        }
        </div>
    )
}
export default OutraLista