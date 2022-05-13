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
     {id:1 ,valor:50, produto: Produto1, titulo: 'CAMISA ASTRONÔMICA 1' },
     {id:2 ,valor:55, produto: Produto2, titulo: 'CAMISA ASTRONÔMICA 2'},
     {id:3, valor:65, produto: Produto3, titulo: 'CAMISA ASTRONÔMICA 3'},
     {id:4, valor:69, produto: Produto4, titulo: 'CAMISA ASTRONÔMICA 4'},
     {id:5, valor:100, produto: Produto5, titulo: 'CAMISA ASTRONÔMICA 5'},
     {id:6, valor:102, produto: Produto6, titulo: 'CAMISA ASTRONÔMICA 6'},
     {id:7, valor:120, produto: Produto7, titulo: 'CAMISA ASTRONÔMICA 7'},
     {id:8, valor:129, produto: Produto8, titulo: 'CAMISA ASTRONÔMICA 8'},
    ],
    
    ordemLista:"crescente"
 }
 
 updateOrdemLista = (evento) => {
   this.setState({ordemLista: evento.target.value})
 }



  render(){
  const listaDeProdutos = this.state.camisas
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


      </header>

      {/*Ecommerce*/}

      <section className='loja container'>
        <h2 className='section-title'>Loja de Produtos</h2>
        <select value={this.state.ordemLista} onChange={this.updateOrdemLista}>
          <option value='crescente'>Crescente</option>
          <option value='decrescente'>Decrescente</option>
        </select>

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