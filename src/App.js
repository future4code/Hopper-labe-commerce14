import React from 'react';
import './App.css';
import 'boxicons';
import Produto1 from './componentes/imgs/produto1.jpg'
import Produto2 from './componentes/imgs/produto2.jpg'
import Produto3 from './componentes/imgs/produto3.jpg'
import Produto4 from './componentes/imgs/produto4.jpg'
import Produto5 from './componentes/imgs/produto5.jpg'
import Produto6 from './componentes/imgs/produto6.jpg'
import Produto7 from './componentes/imgs/produto7.jpg'
import Produto8 from './componentes/imgs/produto8.jpg'
import  Box  from './componentes/imgs/Box';
import Carrinho from './componentes/imgs/Carrinho';
import styled from 'styled-components'

const total = styled.div`
color: ${props => {
  if (props.tipo === 1) {
    return "#fff"
  } else if(props.tipo === 2) {
    return "black"
  }
}};
`

class App extends React.Component {
 state = {
   camisas: [
     {id:0 ,valor:50, produto: Produto1, titulo: 'CAMISA SKATEASTRO', quant:0},
     {id:1 ,valor:55, produto: Produto2, titulo: 'CAMISA SPACE', quant:0},
     {id:2, valor:65, produto: Produto3, titulo: 'CAMISA ASTRONÔMICA 1', quant:0},
     {id:3, valor:69, produto: Produto4, titulo: 'CAMISA ASTRONÔMICA 2', quant:0},
     {id:4, valor:100, produto: Produto5, titulo: 'CAMISA SURFSPACE', quant:0},
     {id:5, valor:102, produto: Produto6, titulo: 'CAMISA TO EARTH', quant:0},
     {id:6, valor:120, produto: Produto7, titulo: 'CAMISA AROUND TO WORLD', quant:0},
     {id:7, valor:129, produto: Produto8, titulo: 'CAMISA GET TO WORLD', quant:0},
    ],
    carrinho: [
      {id:0 ,valor:50, produto: Produto1, titulo: 'CAMISA SKATEASTRO', quant:0},
     {id:1 ,valor:55, produto: Produto2, titulo: 'CAMISA SPACE', quant:0},
     {id:2, valor:65, produto: Produto3, titulo: 'CAMISA ASTRONÔMICA 1', quant:0},
     {id:3, valor:69, produto: Produto4, titulo: 'CAMISA ASTRONÔMICA 2', quant:0},
     {id:4, valor:100, produto: Produto5, titulo: 'CAMISA SURFSPACE', quant:0},
     {id:5, valor:102, produto: Produto6, titulo: 'CAMISA TO EARTH', quant:0},
     {id:6, valor:120, produto: Produto7, titulo: 'CAMISA AROUND TO WORLD', quant:0},
     {id:7, valor:129, produto: Produto8, titulo: 'CAMISA GET TO WORLD', quant:0},
    ],
    pesquisar:"",
    ordemLista:"crescente",
    preçoMinimo:"",
    preçoMaximo:"",
    trocaTela: 1,
    total: 1 ,
 }
 
//  componentDidUpdate() {
//   const salvaCarrinho = JSON.stringify(this.state.carrinho)
//   localStorage.setItem('carrinho', salvaCarrinho)
//  }

//  componentDidMount() {
//    const carregaCarrinho = localStorage.getItem('carrinho')
//    const transformaEmObjeto = JSON.parse(carregaCarrinho)
//   this.setState({carrinho:transformaEmObjeto})
//  }
 
 
 
 
 updateAddCarrinho = (ref)=>{
  const filtro = this.state.camisas.filter((id,index)=>{return ref === id.id})
  const idFiltro = filtro.map((lista)=>{return lista.id})
  const addItemFiltro = this.state.carrinho[idFiltro].quant+1
  const alteraItem = filtro.map((lista)=>{ const listaq = {id: lista.id,valor:lista.valor, produto:lista.produto, titulo:lista.titulo, quant:addItemFiltro}; return listaq})
  let chamaCarrinho = [...this.state.carrinho] 
  let retiraItem = chamaCarrinho.splice(idFiltro,1)
  let addNovoItem = chamaCarrinho.splice(idFiltro,0,alteraItem[0])
  let soma = this.state.total+this.state.carrinho[idFiltro].valor
  


  this.setState({carrinho:chamaCarrinho})
  this.setState({total:soma})
  console.log(soma)
  
}
 
removeCarrinho = (ref)=>{
  const filtro = this.state.camisas.filter((id,index)=>{return ref === id.id})
  const idFiltro = filtro.map((lista)=>{return lista.id})
  let addItemFiltro = this.state.carrinho[idFiltro].quant-1
  const alteraItem = filtro.map((lista)=>{ const listaq = {id: lista.id, produto:lista.produto, titulo:lista.titulo, quant:addItemFiltro}; return listaq})
  let chamaCarrinho = [...this.state.carrinho] 
  let retiraItem = chamaCarrinho.splice(idFiltro,1)
  let addNovoItem = chamaCarrinho.splice(idFiltro,0,alteraItem[0])
  
  let subtrai = this.state.total-this.state.camisas[idFiltro].valor
  
  
  this.setState({carrinho:chamaCarrinho})
  this.setState({total:subtrai})
  console.log(subtrai)
}


updateOrdemLista = (event) => {
   this.setState({ordemLista: event.target.value})
 }

 PesquisarCamisas = (event) => {
   this.setState({pesquisar: event.target.value})
 }

 PreçoMinimo = (event) => {
  this.setState({preçoMinimo: event.target.value})
}
PreçoMaximo = (event) => {
  this.setState({preçoMaximo: event.target.value})
}

abreCarrinho = () =>{
  this.setState({trocaTela:2})
}

abreLoja = () =>{
  this.setState({trocaTela:1})
}

TituloDaLoja = () =>{
  if (this.state.trocaTela === 1){
    return "Loja de produtos"
  } else {
    return "Carrinho"
  }

}

listaDeProdutos = () =>{

switch (this.state.trocaTela){
case 1:
return (this.state.camisas.filter(lista =>{
return lista.titulo.toLocaleLowerCase().includes(this.state.pesquisar.toLocaleLowerCase())
})
.filter(lista =>{
return this.state.preçoMinimo === "" || lista.valor >= this.state.preçoMinimo
})
.filter(lista =>{
return this.state.preçoMaximo === "" || lista.valor <= this.state.preçoMaximo
})
.sort((a,b)=>{
switch (this.state.ordemLista){
case "crescente": 
 return a.valor-b.valor;
 default:
   return b.valor-a.valor  
}
})
.map(lista => {
return <Box id={lista.id}  produto={lista.produto} valor={lista.valor} titulo={lista.titulo} funcao={this.updateAddCarrinho}/>}
))
break
case 2:
  return (this.state.carrinho.map((lista=>{ 
    
    if (lista.quant === 0) { return <p></p> }
    else {return <Carrinho img={lista.produto} titulo={lista.titulo} quant={lista.quant} id={lista.id} funcao={this.updateAddCarrinho} funcaomenos={this.removeCarrinho}></Carrinho>}

  })) 
    
  )
}}
  render(){
  

  return (
    <div>
      <header>

        {/*Nav*/}

        <div className='nav container'>
          <a href='#' className='logo' onClick={this.abreLoja}>LabECommerce</a>
          <button className='button-header' onClick={this.abreCarrinho}><box-icon name='shopping-bag' id="cart-icon"></box-icon></button>
          
        </div>
        <div className='CampoDePesquisa'>
        <input placeholder='Pesquisar' value={this.state.pesquisar} onChange={this.PesquisarCamisas}/>
        <input type= "number" placeholder='Preço minimo' value={this.state.preçoMinimo} onChange={this.PreçoMinimo}/>
        <input type="number" placeholder='Preço maximo' value={this.state.preçoMaximo} onChange={this.PreçoMaximo}/>
        
        
        <select value={this.state.ordemLista} onChange={this.updateOrdemLista}>
          <option value='crescente'>Crescente</option>
          <option value='decrescente'>Decrescente</option>
        </select>
        </div>
      </header>
      

      

      {/*Ecommerce*/}

      <section className='loja container'>
               
        <h2 className='section-title'>{this.TituloDaLoja()}</h2>

      {/*Conteudo*/}
      
        {/*box*/}
      <div className='loja-conteudo'>
          {this.listaDeProdutos()}
          
      </div>
      <total tipo={this.state.trocaTela}>Total:  R${this.state.total-1},00</total>

      </section>
      
    </div>
  );
}}

export default App;