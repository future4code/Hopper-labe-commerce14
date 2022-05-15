import React from "react"


 function Box (props) {
return <div className='produto-box'>
          <img src={props.produto} alt='camisa' className='produto'/>
          <h2 className='produto-titulo'>{props.titulo}</h2>
          <span className='price'>R${props.valor}</span>
          <button onClick={props.funcao} className="button-add-carrinho">{props.total}<box-icon name='shopping-bag' color='#ffffff' id="add-carinho"></box-icon></button>
        </div>

} export default Box