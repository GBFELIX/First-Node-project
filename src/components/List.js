import Item from "./Item"
function List(){
    return(
        <div>
            <h1>lista</h1>
            <ul>
                <Item marca="lambo" lancamento={2020}/>
                <Item marca="porshe" lancamento={2019}/>
            </ul>
        </div>
    )
}
export default List