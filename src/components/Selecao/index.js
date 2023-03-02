import PropTypes from 'prop-types';
import './styles.css'

function Selecao( { sigla, nome, grupo } ) {
    // console.log(props);
    // props.sigla
    // props.nome
    // props.grupo
  return (
    <div className='linha-selecao'>
        <span>{nome}</span>
        <span>{sigla}</span>
        <span>{grupo}</span> 
    </div>
  )
}

Selecao.propTypes = {
    nome: PropTypes.string.isRequired, 
    sigla: PropTypes.string.isRequired,
    grupo: PropTypes.string.isRequired
}

export default Selecao;