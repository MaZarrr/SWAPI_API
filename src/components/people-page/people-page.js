import React, {Component} from 'react'
import ItemList from '../item-list/item-list'
import ItemDetails from '../item-details/item-details'
import './people-page.css'
import SwapService from '../../services/swapi-sevice'
import Row from '../../components/row-item'
import ErrorBoundry from '../error-boundry'

export default class PeoplePage extends Component {
    
    swapiService = new SwapService()

    state = {
        selectedPerson: 2
    }

    onPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
          
        })
      }

      render() {  
        const itemList = (
            <ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}>
            {({name, gender, birthYear}) => `${name} ${gender}  ${birthYear}` }
           </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
            <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )
            return ( 
            <ErrorBoundry>
            <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
          )
      }
}