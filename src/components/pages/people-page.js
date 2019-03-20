import React from 'react'
import  { PersonList } from '../sw-components/item-lists'
import PersonDetails from '../item-details/person-details'
import { withRouter } from 'react-router-dom'
// import './people-page.css'
import Row from './../row-item';

const PeoplePage = ({ match, history}) => {

        const { id } = match.params
        return(
            <Row left={<PersonList onItemSelected={(id) => history.push(id)} /> } 
                 right={<PersonDetails itemId={id} /> } />
    )
}


export default withRouter(PeoplePage)