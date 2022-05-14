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




class App extends React.Component {
 state = {
   camisas: [
     {id:1 ,valor:50, produto: Produto1, titulo: 'CAMISA SKATEASTRO'},
     {id:2 ,valor:55, produto: Produto2, titulo: 'CAMISA SPACE'},
     {id:3, valor:65, produto: Produto3, titulo: 'CAMISA ASTRONÔMICA 1'},
     {id:4, valor:69, produto: Produto4, titulo: 'CAMISA ASTRONÔMICA 2'},
     {id:5, valor:100, produto: Produto5, titulo: 'CAMISA SURFSPACE'},
     {id:6, valor:102, produto: Produto6, titulo: 'CAMISA TO EARTH'},
     {id:7, valor:120, produto: Produto7, titulo: 'CAMISA AROUND TO WORLD'},
     {id:8, valor:129, produto: Produto8, titulo: 'CAMISA GET TO WORLD'},
    ],
    pesquisar:"",
    ordemLista:"crescente",
    preçoMinimo:"",
    preçoMaximo:""
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



  render(){
  const listaDeProdutos = this.state.camisas
  .filter(lista =>{
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
     return a.titulo.localeCompare(b.titulo);
     default:
       return b.titulo.localeCompare(a.titulo)  
    }
  })
  .map(lista => {
    return <Box produto={lista.produto} valor={lista.valor} titulo={lista.titulo}/>}
  )
  
  return (
    <div>
      <header>

        {/*Nav*/}

        <div className='nav container'>
          <a href='#' className='logo'>LabECommerce</a>
          <box-icon name='shopping-bag' id="cart-icon"></box-icon>
          
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
               
        <h2 className='section-title'>Loja de Produtos</h2>

      {/*Conteudo*/}
      
        {/*box*/}
      <div className='loja-conteudo'>
          {listaDeProdutos}
          {console.log(this.state.camisas)}
        
      </div>

      </section>
      
    </div>
  );
}}

export default App;