import googlePng from './imagens/google.png';
import lupa from './icones/lupa.png';
import sandwich from './icones/sandwich.png';
import teclado from './icones/teclado.png';
import microfone from './icones/microfone.png'
import foto from './icones/foto.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top0">
        <p className="espaco-right">Gmail</p>
        <p className="espaco-right">Imagens</p>
        <img src={sandwich} className="espaco-right"/>
        <img src={foto} className="espaco-right" />
      </div>

      <header className="App-header">
        <img src={googlePng} alt="logo"/>

        <div className="div-pesquisa">
          <div className="insid-pesquisa">
            <img class="img-lupa" src={lupa}/>
            <input type="text" className="text-pesquisa" />
            <img className="pesquisa-fim" src={teclado}/>
            <img class="pesquisa-fim" src={microfone}/>
          </div>
        </div>
        
        <div className="botao">
          <button className="botao-center">Pesquisa Goolge</button>
          <button className="botao-center">Estou com sorte</button>
        </div>
      </header>

      <footer className="app-footer">
        <p>Brasil</p>
        
       <div className="rodape">
          
          <div classNme="div-rodape1">
            <p>Sobre</p>
            <p>Publicidade</p>
            <p>Negócios</p>
            <p>Como funciona a Pesquisa</p>
          </div>

          <div classNme="div-rodape2">
            <p>Privacidade</p>
            <p>Termos</p>
            <p>Configurações</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
