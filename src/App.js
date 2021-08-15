import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './global.css'
import CardList from './Components/cardList';
import Info from './Components/info';
import Episodes from './Components/episodes';
import Episode from './Components/episode';


function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={CardList}></Route>
        <Route path='/sobre/:id' exact={true} component={Info}></Route>
        <Route path='/:nome_personagem/episodes/:id_personagem' exact={true} component={Episodes}></Route>
        <Route path='/episode/:id_episodio' exact={true} component={Episode}></Route>
        <Route path='/location/:id_location' exact={true} component={Info}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
