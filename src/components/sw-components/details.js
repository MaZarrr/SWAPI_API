// import React from 'react'
// import ItemDetails, { Record } from '../../components/item-details/item-details'
// import withSwapiSevice  from '../sw-components/with-swapi-service'

// // const swapiService = new SwapService()
// // const { getPlanets, getStarships, 
// //         getImagePlanets, getImageStarships
// //         } = swapiService

// const PersonDetails = ({itemId}) => { 
//     return (
                     
//     <ItemDetails
//         itemId={itemId}
//         getData={getPerson}
//         getImageUrl={ getImagePersons } >
        
//         <Record field="gender" label="Gender" />
//         <Record field="eyeColor" label="EyeColor" />
//     </ItemDetails>
              
//           )
// }
// const PlanetDetails = ({itemId}) => {
//   return (
//     <SwapiSeviceConsumer>
//       {
//         ( { getPlanets, getImagePlanets}) => {
//         return (
//           <ItemDetails
//           itemId={itemId}
//           getData={getPlanets}
//           getImageUrl={ getImagePlanets } >
          
//           <Record field="gender" label="Gender" />
//           <Record field="eyeColor" label="EyeColor" />
//       </ItemDetails>
//         )
//       }
//     }
//     </SwapiSeviceConsumer>
// )
// }
// const StarshipDetails = ({itemId}) => {
//   return (
//     <SwapiSeviceConsumer>
//       {
//         ( { getStarships, getImageStarships}) => {
//         return (
//           <ItemDetails
//           itemId={itemId}
//           getData={getStarships}
//           getImageUrl={ getImageStarships } >
          
//           <Record field="gender" label="Gender" />
//           <Record field="eyeColor" label="EyeColor" />
//       </ItemDetails>
//         )
//       }
//     }
//     </SwapiSeviceConsumer>
// )
// }

// export {
//     PersonDetails,
//     PlanetDetails,
//     StarshipDetails
// }
