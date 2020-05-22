import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import FotoPerfil from './Images/Foto_PB.jpeg';
import IconeGoes from './Images/Goes_icon.jpg';
import IconeLuminae from './Images/luminae_icon.png';
import IconeLabenu from './Images/Labenu_icon.png';
import IconeFiam from './Images/Fiamfaam_icon.png';
import IconeInfo from './Images/Info_icon.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Israel Queiroz Cavalcanti" 
          descricao="Sou uma pessoa focada em aprender com novas experiências e sobretudo organizado, pois acredito que a organização é uma forma de manter um ambiente agradável, limpo e convidativo, possibilitando um melhor desempenho profissional."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={IconeGoes} 
          nome="Goes Engenharia e Arquitetura" 
          descricao="Auxiliar de arquitetura."
          ano="2018 - 2020"
        />
        
        <CardGrande 
          imagem={IconeLuminae} 
          nome="Grupo Luminae Energia" 
          descricao="Estagiário"
          ano="2016 - 2017"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <CardGrande 
          imagem={IconeLabenu} 
          nome="Labenu" 
          descricao="Full Stack Web Development (HTML - CSS - JavaScript - React)"
          ano="2020 - 2020"
        />
        
        <CardGrande 
          imagem={IconeFiam} 
          nome="FIAM-FAAM" 
          descricao="Bacharelado em Arquitetura e Urbanismo"
          ano="2012 - 2017" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />       
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          icon={IconeInfo}
          title="Maiores informações:"
          email="israel_cavalcanti@hotmail.com"
          addres="Rua Rubens Meireles, 105"
        />
      </div>
    </div>
  );
}

export default App;
