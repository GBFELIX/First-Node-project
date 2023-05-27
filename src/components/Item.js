import propTypes from 'prop-types'
function Item({marca, lancamento}){
    return(
        <>
         <li>
            {marca} - {lancamento}
        </li>
        </>
    )
}
Item.propTypes = {
    marca: propTypes.string.isRequired,
    lancamento: propTypes.number,
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 0,
}
export default Item 