import React from 'react'
// import SwapiSevice from '../../services/swapi-sevice'

const { 
Provider: SwapiSeviceProvider,
Consumer: SwapiSeviceConsumer
} = React.createContext()

export {
    SwapiSeviceProvider,
    SwapiSeviceConsumer
}