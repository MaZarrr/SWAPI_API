export default class DummySwapiService {

    _transformPerson = [
      {
        id: 1,
        name: 'Bilbo Baggins [TEST DATA]',
        gender: 'male',
        birthYear: 'long ago',
        eyeColor: 'dark brown'
      },
  
      {
        id: 2,
        name: 'Frodo Baggins [TEST DATA]',
        gender: 'male',
        birthYear: 'long ago',
        eyeColor: 'dark brown'
      }
    ];
  
    _transformPlanet  = [
      {
        id: 1,
        name: 'Earth [TEST DATA]',
        population: '7.530.000.000',
        rotationPeriod: '23 hours 56 seconds',
        diameter: '12.742 km'
      },
      {
        id: 2,
        name: 'Venus [TEST DATA]',
        population: 'not known',
        rotationPeriod: '243 days',
        diameter: '12.104 km'
      }
    ];
  
    _transformStarship = [
      {
        id: 1,
        name: 'USS Enterprise [TEST DATA]',
        model: 'NCC-1701-C',
        manufacturer: 'Northrop Grumman Shipbuilding',
        costInCredits: 'not known',
        length: 'approx 300 meters',
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100
      }
    ];
  
    getAllPeople = async () => {
      return this._transformPerson;
    };
  
    getPerson = async () => {
      return this._transformPerson[0];
    };
  
    getAllPlanets = async () => {
      return this._transformPlanet;
    };
  
    getPlanets = async () => {
      return this._transformPlanet[0]
    };
  
    getAllStarships = async () => {
      return this._transformStarship;
    };
  
    getStarships = async () => {
      return this._transformStarship[0];
    };
  
    getImagePersons = () => {
      return `https://placeimg.com/400/500/people`
    };
  
    getImageStarships = () => {
      return `https://placeimg.com/600/400/tech`;
    };
  
    getImagePlanets = () => {
      return `https://placeimg.com/400/400/nature`
    };
  }