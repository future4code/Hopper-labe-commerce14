import React from "react"


 function Box (props) {
return <div className='produto-box'>
          <img src={props.produto} alt='camisa' className='produto'/>
          <h2 className='produto-titulo'>{props.titulo}</h2>
          <span className='price'>R${props.valor}</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho"></box-icon>
        </div>

} export default Box