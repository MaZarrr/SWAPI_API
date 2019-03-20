import React from 'react'
import { SwapiSeviceConsumer } from '../swapi-service-contex/swapi-service-context'
// import { mapContentToProps } from '../item-details/person-details'

// компонент высшен=го порядка для контекста
const withSwapiService = (mapContentToProps) => (Wrapped) => {
    return (props) => {
        return (  
        <SwapiSeviceConsumer>
            {
                ( swapiService ) => {
                    const contentToProps = mapContentToProps(swapiService);
                    return (
                        <Wrapped {...props} {...contentToProps}/>
                    )
                }
            }
        </SwapiSeviceConsumer>  
        );
    };
};
export default withSwapiService