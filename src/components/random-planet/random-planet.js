import React, {Component} from 'react'
import SwapiService from '../../services/swapi-sevice'
import './random-planet.css'
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import PropTypes from 'prop-types'

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  // static propTypes = {
  //   updateInterval: (props, propsName, componentName) => {
  //     const value = props[propsName];
  //     if(typeof value === 'number' && !isNaN(value)) {
  //       return null
  //     }
  //     return new TypeError(`${componentName}: ${propsName} must be number`)
  //   }
  // }
  static propTypes = {
    updateInterval: PropTypes.number
  }

swapiService = new SwapiService();

state = {
  planet: {},
  loading: true, // как только компонент проинициализируется мы должны прорисовать след данные соответ сначала компон долж прорис с лоадером
  error: false
}
// population: null, // поскольку мы еще не получили реальные данные то мы хотим изменить эти данные с null на не null

componentDidMount() {
  const { updateInterval } = this.props
  this.interval = setInterval(this.updatePlanet, updateInterval);
}

onLoadedPlanet = (planet) => {
  this.setState( {         // теперь когда мы знаем что данные о планете это именно те данные которые нам нужны то мы можем поставить в наш стейт весь обьект целиком
   planet,
   loading: false,
   error: false
  } )  
}

onError = (err) => { // на вход будем принимать ошибку err
  this.setState({
    error: true,
    loading: false
  })
}  

updatePlanet = () => { // отрифакторили код updatePlanet он читает ся теперь легче
  const id = Math.floor(Math.random() * 19 + 3); // Math.floor округлить число до ближаешего целого
  this.swapiService
  .getPlanets(id)
  .then(this.onLoadedPlanet) // асинхронное событие
  .catch(this.onError)
}

    render() {

      const { planet, loading, error } = this.state
        
      const hasData = !(loading || error) // когда у нас нет не загрузки не ошибки

      const errorMessage = error ? <ErrorIndicator /> : null
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <PlanetView planet={planet} /> : null

      return (
      <div className="random-planet jombotron rounded">
        {errorMessage}
        {content}
        {spinner}
      </div>
      );
    }
  }


  const PlanetView = ( {planet} ) => {

    const { id, name, population, rotationPeriod,
      diameter } = planet
    
      return (
     <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
      </>
    )
  }

  

  //------------------------------- Методы жизненного цикла REACT COMPONENT ----------------------------------
  // Бывают этапы: ------- на каждом этапе есть функции жизненного цикла ----------------------
  // 1. MOUNTING ----- то когда компонент создается и первый раз отображается на странице
  // Процесс MOUNTING: сперва вызывается конструктор затем Реакт вызывает Рендер и затем componentDidMount()
  // constructor() => render() => componentDidMount()
  // componentDidMount() вызывается если компонент удачно отрисовался на странице в первый раз
  // удачный метод что бы делать запросы к АРI // инициализацию компонентов которые зависят от внешних источников данных лучше проводить в DidMount
  
  // 2. UPDATES  -- это тот этап когда компонент отобразился он работает и он может получать обновления
  // Каким образом происхлдят Updates(обновления)?:
  // или New Props - пришли новые св-ва 
                                                      // любое из этих 2х событий вызывает render() те мы получ новое дерево элем реакт и затем 
                                                      // componentDidUpdate()  - Реакт дает нам шанс сделать что нибудь как компонент обновился
  // или SetState - Компонент вызвал SetState благодаря какому нибудь событию

  // 3. UNMOUNTING -- это этап когда компоенент удаляется со страницы
  // Когда Компонент становится не нужен вызывается просто componentWillUnmount()

  // 4. ERROR -- это этап ошибки которае не была поймана раньше
  // componentDidCatch()
  //------------------------------- Методы жизненного цикла REACT COMPONENT ----------------------------------