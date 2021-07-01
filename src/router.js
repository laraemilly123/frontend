import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './paginas/login'
import Home from './paginas/home'
import Error from './paginas/error'
import Produto from './paginas/produto';
import Cadastro from './paginas/Cadastro';
import Header from './componentes/Header';




function Rotas() {
    return (
    <BrowserRouter>
    <Header></Header>
    <Switch>
       <Route exact path= "/">
           <Login></Login>
           

         </Route>
         <Route exact path= "/home">
           <Home></Home>
           </Route>

           <Route exact path= "/inserir">
             <Cadastro></Cadastro>
           </Route>


         <Route path= "/produto/:id">
           <Produto></Produto>
           </Route>



<Route exact path= "*">
   <Error></Error>
      </Route>
    

    </Switch>
    </BrowserRouter>
    );
}

  
  export default Rotas;