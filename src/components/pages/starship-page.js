import  {StarshipList} from '../sw-components/item-lists'
import  React  from 'react'
import { withRouter } from 'react-router-dom'

const StarshipPage = ( { history } ) => {
// id корабля закодирован в url странице
        return (
            <StarshipList onItemSelected={(id) => {
                console.log(history);
                history.push(id)}
                } />             
            // ('`/starships/ - это абсолютная часть) передали абсолютный путь
            // <StarshipList onItemSelected={(itemId) => { history.push(`/starships/${itemId}`); 
        )
    }

    export default withRouter(StarshipPage);       
    

// state = {
//     selectedItem: null,
//     loading: true,
//     error: false
// }

// onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem })
// }

// render() {
    
//     const { selectedItem } = this.state

//     return(
//     <Row left={<StarshipList onItemSelected={this.onItemSelected}/>} right={<StarshipDetails itemId={selectedItem} />} />
//     )
// }