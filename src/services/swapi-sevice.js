// cоздаем полноценный класс Клиент для работы с этим API
// создаю его что бы инкапсулировать весь сетевой код от остальных частей приложения
// клод работы с данными назодится в одном месте и в будущем мы сможем проще реализовать кеширование или сменить источник данных
// - или реализовать дополнительную логику фильтрации или энричмента
// для остального приложения SwapService это просто асинхронный источник данных // а все особенности работы этих данныъ инкапсулированы внутри
// - их будет легко обновлять или тестировать не касаясь других частей приложения
export default class SwapService {

    _apiBase = 'https://swapi.co/api'
    _apiImage = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => { 
        const res = await fetch(`${this._apiBase}${url}`); 
        if(!res.ok) {             
            throw new Error(`Could not fetch ${url}` +  
            `, received ${res.status}`)
        }       
        return await res.json();                  
    }
    
     getAllPeople = async () => {
        const res = await this.getResource(`/people`);
        return res.results.map(this._transformPerson) // возвращаем массив людей
    }
    
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }
    
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets`);
        return res.results.map(this._transformPlanet)
            
    }
    
     getPlanets = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }
    
    getAllStarships = async () => {
        const res = await this.getResource(`/starships`);
        return res.results.map(this._transformStarship);     
    }
    
    getStarships = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship);
    }

    getImagePersons = ( {id} ) => {
        return `${this._apiImage}/characters/${id}.jpg`
    }
    
    getImageStarships = ({id}) => {
        return `${this._apiImage}/starships/${id}.jpg`
    }

    getImagePlanets = ({id}) => {
        return `${this._apiImage}/planets/${id}.jpg`
    }

    _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/; // регулярные выражения
    return item.url.match(idRegExp)[1];  // [1] - группа а 0 -это idRegExp поскольку он заматчился 
    }

    // изолировали все трансформации данных в нашем классе сервисе и таким образом мы гарантировали что теперь
    // любой компонент который будет получать данные из swapi будет получать корректные данные
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),  // тот api который мы используем не публикует внутренние id // искустрвенно добавляем id которое нам не дает api
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person), 
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship), 
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
}























// const swapi = new SwapService();

// // код который обрабатывает данные не знает от куда эти данные берутся
// swapi.getAllPeople() 
// .then(( people ) => {
//     people.forEach((element) => {
//         console.log(element.name); // получили имя каждого персонажа из массива
//     });
// });

// swapi.getPerson(3)
// .then(( people ) => {
//     console.log(people.name); 
// });



// const getResource = async (url) => { // async говорим что это будет асинхронная функция
//     const res = await fetch(url); // fetch(url) - возвращает promise ключевое слово await говорит что мы будем ждать что пока результат этого promise
//     if(!res.ok) {                 // - не станет доступным, и как только результат станет доступтым мы его запишем переменную res
//         throw new Error(`Could not fetch ${url}` +  
//         `, received ${res.status}`)
//     }       

//     const body = await res.json(); // теперь когда у нас есть res (результат) - мы можем достать тело
//     return body;                   // точно так же res.json - возвращает promise await - будет ждать пока результат promise не станет доступным и затем рез-т будет записан в body
// };

// getResource('https://swapi.co/api/people/1/')
// .then(( body ) => { // как только getResourse будет доступен мы получаем тело body
//     console.log(body);
// })
// .catch((err) => {
//     console.error(err);
// });

