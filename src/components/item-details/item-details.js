import React, {Component} from 'react'
import './item-details.css'
// import SwapiService from '../../services/swapi-sevice'
import Spinner from '../spinner/spinner';

const Record = ( {item, field, label} ) => {
  return (
<li className="list-group-item">
  <span className="term">{label}</span>
  <span>{item[field]}</span>
</li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  // swapiService = new SwapiService();
  
  state = {
    item: null,
    image: null,
    loading: true
  }

componentDidMount() {
  this.updateItem()
}

componentDidUpdate(prevProps) { // если компонент обновляется мы получаем prevProps
// нужо проверить что изменилось именно то свовйсво за которым я сслежу
if(this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData
  || this.props.getImageUrl !== prevProps.getImageUrl) { // сравнить предыдущее состояние с текущим и решить нужно что то делать или нет
// внутри писать логику которая влияет на изменение св-в и стейта компонента
this.updateItem();
this.setState({
  loading: true
    })
  }
}

updateItem() { // updateItem - использовать каждый раз когда нам нужно обновиитть персонажа
    const { itemId, getData, getImageUrl } = this.props
    if(!itemId) { // если у нас нет id то мы не обнавляем обновлять нечего
      return;
    }
getData(itemId)
.then((item) => {
this.setState( {
  item,
  image: getImageUrl(item),
  loading: false
    });
  });  
}

render() {
    
  const { item, loading, image } = this.state
  // const { name, gender, birthYear, eyeColor } = this.state.item
   
  const spinner = loading  ? <Spinner /> : null
  const items = !loading ? <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                {
                React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, { item } ) // добавится новое св-во в child элемент при создании
                })
                }
                </ul>
                </div> 
                : null
  return (
    <div className="person-details card">
    <img className="person-image"
    src={image}
    alt={'img-person'}/>
    {items}
    {spinner}
    </div>
  )
}
}









  // const PersonItem = ( {item, image} ) => {
  //   const { name, gender, birthYear, eyeColor } = item
  //   return(
  //     <>
  //     <img className="person-image"
  //     src={image}
  //    alt={'img-person'}/>

  //   <div className="card-body">
  //     <h4>{name}</h4>
  //     <ul className="list-group list-group-flush">
  //      {
  //        React.Children.map(this.props.children, (child, idx) => {
  //          return child;
  //        })
  //      }
  //     </ul>
  //   </div>
  //   </>
  //   )
  // }









  // componentDidUpdate(prevProps) { // если компонент обновляется мы получаем prevProps
  //   // нужо проверить что изменилось именно то свовйсво за которым я сслежу
  //   if(this.props.itemId !== prevProps.itemId) { // сравнить предыдущее состояние с текущим и решить нужно что то делать или нет
  //   // внутри писать логику которая влияет на изменение св-в и стейта компонента
  //   this.updateItem();
  //   this.setState({
  //     loading: true
  //       })
  //     }
  //   }























