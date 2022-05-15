import React from "react";

function Carrinho (props){
 
    return  <div className="carrinho">
            <div className="card-item">
            <img src={props.img} alt={props.titulo}></img>
            <div className="card-item-modifica">
            <button className="card-item-menos">-</button>
            <p className="card-item-qt">1</p>
            <button className="card-item-mais" >+</button>
            </div>
            </div>

            <div className="carrinho-total">
            <p>Total</p>
            <p>{props.totalDeItens}</p>
            </div>
            
            
            
            </div>
    



    
}
export default Carrinho