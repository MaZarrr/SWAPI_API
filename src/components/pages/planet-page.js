import React, {Component} from 'react'
import  { PlanetList } from '../sw-components/item-lists'
import PlanetDetails from '../item-details/planet-details'
import Row from '../../components/row-item'

export default class PlanetPage extends Component {

    state = {
        selectedItem: 1,
        loading: true,
        error: false
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        
        const { selectedItem } = this.state
    
        return(
        <Row left={<PlanetList onItemSelected={this.onItemSelected}/>} right={<PlanetDetails itemId={selectedItem} />} />
        )
    }
}