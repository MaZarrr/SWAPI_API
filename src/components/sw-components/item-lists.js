import React from 'react'
import WithData from '../../hoc/with-data'
import ItemList from '../item-list/item-list'
import withSwapiService from './with-swapi-service'
import  compose from '../../hoc/compose'

// const swapiService = new SwapService()
// const { getAllPeople, getAllPlanets, getAllStarships } = swapiService

const WrapperFuncItem = (fc) => (Wrapper) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fc}
            </Wrapper>
        )
    }
}

const renderName = ( {name} ) => <span>{name}</span> 
const renderItemStarship = ( {model, name} ) => <span>{name} ({model})</span> 

const toPropsPeople = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const toPropsPlanets = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const toPropsStarships = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

/*
const add = (a) => (b) => a + b
add(1)(2)
// наш первый вызов создает функцию которая принимает часть аргументов и она возвращае анонимную функцию которая принимает остальные аргументы
и выполняет нужные нам действия
// так можно разделить аргументы на две группы например в первой гр-ппе будут все аргументы которые исп-тся для конфигурации компонента 
hoc withSwapiService(toPropsPlanets) , а во второй только сам компонент который мы оборачиваем
*/

// const Wr = WrapperFuncItem(ItemList, renderName)
// композиция функций
// 3 функции каждая из которых работает с результатом вызова предыдущей функции 
// - withSwapiService(WithData (WrapperFuncItem(ItemList, renderName)), toPropsPeople)

/*
композиция функций
const compose = (...funsc) => (comp) => {
    ...
}
compose(a,b,c)(value)
-
// всеравно что a(b(c(value)));
*/
const PersonList = compose(
    withSwapiService(toPropsPeople),
    WithData,                
    WrapperFuncItem(renderName)
    )(ItemList);
    
const PlanetList = compose(
    withSwapiService(toPropsPlanets),
    WithData,
    WrapperFuncItem(renderName)
    )(ItemList);
 
    const StarshipList = withSwapiService(toPropsStarships)(
                        WithData (
                            WrapperFuncItem(renderItemStarship)(
                                ItemList)))





// const PersonList = withSwapiService(toPropsPeople)(  // и так далее пока мы не закончим цепочку
//     WithData( // рузультат этой функции передали функцие выше
//         WrapperFuncItem(renderName)( // вызвали функцию -> рузультат этой функции передали функцие выше
//         ItemList))) // получили аргумент


// const PlanetList = withSwapiService(WithData (WrapperFuncItem(ItemList, renderName)), toPropsPlanets)
 
// const PersonList = () => WithData (ItemList, getAllPeople) так недопустимо Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
export {
    PersonList,
    PlanetList,
    StarshipList
}

 