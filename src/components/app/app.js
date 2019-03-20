import Header from '../header/header'
import React, {Component} from 'react'
import { SwapiSeviceProvider } from '../swapi-service-contex/swapi-service-context'
import './app.css'
import SwapiService from '../../services/swapi-sevice'
import ErrorBoundry from '../error-boundry'
import PlanetPage from '../../components/pages/planet-page'
import PeoplePage from '../../components/pages/people-page'
import StarshipPage from '../../components/pages/starship-page'
import DummySwapiService from '../../services/dummy-swapi-service'
import RandomPlanet from '../random-planet/random-planet'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import StarshipDetails from '../item-details/starship-details'
import LoginPage from '../pages/login-pages'
import SecretPage from '../pages/secret-pages'

export default class App extends Component {

state = {
  showRandomPlanet: true,
  swapiService: new  SwapiService(),
  isLoggedIn: false

}

onChangeContext = ( ) => {
this.setState(({swapiService})=> {
  const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
  console.log('swapi is', Service.name);  

  return {
    swapiService: new Service()
  }
  })
}

onPersonSelected = (id) => {
  this.setState({
    selectedPerson: id
  })
}

onLogin = () => {
  this.setState({isLoggedIn: true})
}


render() {

const { isLoggedIn } = this.state

  const planet = this.state.showRandomPlanet ?
  <RandomPlanet /> : null

  return (
      <ErrorBoundry>
      <SwapiSeviceProvider value={this.state.swapiService}>
        <Router>
        <div className="stardb-app">
        <Header onChangeContext={this.onChangeContext} />
        {planet}
        <Switch>
        <Route path="/" render={() => <h1>Hello DB</h1>} exact></Route>
        {/* <Route path="/people" component={() => <h2>People</h2>}/> */}
        <Route path="/people/:id?" component={PeoplePage}/>
        <Route path="/planets" component={PlanetPage}/>
        <Route path="/starships" exact component={StarshipPage} />
        <Route path="/starships/:id" render={ ({ match }) =>  {
          console.log(match)
          const { id } = match.params
          return <StarshipDetails itemId = {id}/>
         }} />
        <Route path="/login" render={() => (
          <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
        )} />
        <Route path="/secret" render={() => (
          <SecretPage isLoggedIn={isLoggedIn} />
        )} />
        {/* НЕ один route не сработал то */}
        {/* Или redirect импользовать на другую страницу */}
        <Route render={() => <h2>Page not found</h2>} />
        </Switch>

        </div>
        </Router>
      </SwapiSeviceProvider>
      </ErrorBoundry>
    );
  };
}















  
  // const {getPerson, getStarships, getImagePersons, getImageStarships,
  // getAllPeople, getAllPlanets
  // } = this.swapiService

  // import RandomPlanet from '../random-planet/random-planet'
  // const planet = this.state.showRandomPlanet ?
  // <RandomPlanet /> : null



// import Row from '../row-item';
// import LoginPage from './../pages/login-pages';
//  <Row
//       left={Details}
//       right={starshipDetails}>
//       </Row> 


    // <div className="row mb2">
    //       <div className="col-md-6">
    //         <ItemList 
    //         onItemSelected={this.onPersonSelected}
    //         getData={this.swapiService.getAllPlanets}>            
    //         {({name, population}) => `${name} ${population}`} 
    //         </ItemList >
    //       </div>
    //       <div className="col-md-6">
    //         <ItemDetails personId={this.state.selectedPerson}/>
    //       </div>
    //     </div> 