import React from 'react'
import ItemDetails, { Record } from './item-details'
import withSwapiService  from '../sw-components/with-swapi-service'

const PersonDetails = (props) => { 
    // const {getPerson, getImagePersons} = swapiService
    return (
    <ItemDetails {...props} >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="EyeColor" />
    </ItemDetails>
     )
}

   const mapContentToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getImagePersons
    }
};

export default withSwapiService(mapContentToProps)(PersonDetails) 






// const swapiService = new SwapService()
// const { getPlanets, getStarships, 
//         getImagePlanets, getImageStarships
//         } = swapiService
