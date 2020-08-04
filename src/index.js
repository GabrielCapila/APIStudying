import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/Categoria';


const Pag404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pag404}  />
    <Home />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);