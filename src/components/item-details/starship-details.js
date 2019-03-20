import React from 'react'
import ItemDetails, { Record } from './item-details'
import withSwapiService from '../sw-components/with-swapi-service'

const StarshipDetails =  (props) => { //({itemId, swapiService}) => { 
    // const {getStarships, getImageStarships} = swapiService
    
return (
                     
    <ItemDetails {...props} >
        {/* // itemId={itemId}
        // getData={getStarships}
        // getImageUrl={ getImageStarships }  */}
        <Record field="model" label="Model" />
        <Record field="crew" label="Crew" />
    </ItemDetails>   
    )
}

const mapContentToProps = (swapiService) => {
    return {
        getData: swapiService.getStarships, 
        getImageUrl: swapiService.getImageStarships
    }
};

export default withSwapiService(mapContentToProps)(StarshipDetails)