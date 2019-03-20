import React from 'react'
import ItemDetails, { Record } from './item-details'
import withSwapiService  from '../sw-components/with-swapi-service'

const PlanetDetails = (props) => { 
    // const {getPlanets, getImagePlanets} = swapiService
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="name" label="Name" />
        </ItemDetails>
              
          )
}

const mapContentToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanets, 
        getImageUrl: swapiService.getImagePlanets
    }
};

export default withSwapiService(mapContentToProps)(PlanetDetails)