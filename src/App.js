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




function App() {
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

      {/*Conteudo*/}
      
      <div className='loja-conteudo'>
        {/*box1*/}
        <div className='produto-box'>
          <img src={Produto1} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box2*/}
        <div className='produto-box'>
          <img src={Produto2} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box3*/}
        <div className='produto-box'>
          <img src={Produto3} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box4*/}
        <div className='produto-box'>
          <img src={Produto4} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box5*/}
        <div className='produto-box'>
          <img src={Produto5} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box6*/}
        <div className='produto-box'>
          <img src={Produto6} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box7*/}
        <div className='produto-box'>
          <img src={Produto7} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>
        {/*box8*/}
        <div className='produto-box'>
          <img src={Produto8} alt='camisa' className='produto' />
          <h2 className='produto-titulo'>Camisa Astronomous</h2>
          <span className='price'>R$50</span>
          <box-icon name='shopping-bag' color='#ffffff' id="add-carinho" ></box-icon>
        </div>

      </div>

      </section>
    </div>
  );
}

export default App;