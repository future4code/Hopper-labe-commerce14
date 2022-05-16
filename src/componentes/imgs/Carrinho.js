import React from "react";

function Carrinho (props){
 
    return  <div className="carrinho">
            <div className="card-item">
            <img src={props.img} alt={props.titulo}></img>
            <p>{props.titulo}</p>
            <div className="card-item-modifica">
            <button className="card-item-menos" onClick={()=>{props.funcaomenos(props.id)}}>-</button>
            <div className="card-item-qt">{props.quant}</div>
            <button className="card-item-mais" onClick={()=> {props.funcao(props.id)}} >+</button>
            </div>
            </div>
            
            
            </div>
    



    
}
export default Carrinho



