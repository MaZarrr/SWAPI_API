import React, {Component} from 'react'
import Spinner from '../components/spinner/spinner'
import ErrorIndicator from '../components/error-indicator/error-indicator'

const WithData = (View) => { 
  return class extends Component {
      
      state = {
        data: null,
        loading: true,
        error: false
      }
      
      componentDidUpdate(prevProps) { // когда мы получили обновление компонента
        // когда функция получения данных обновилась нужно обновить и сами данные
//  if(this.props.getData !== prevProps.getData) {   // те она не равна предыдущему значению то это зто значит и данные обновились
        if(this.props.getData !== prevProps.getData) {
          this.update();
        }
      }

      componentDidMount() {
       this.update();
      }

      update() {
        
        this.setState({
          loading: true,
          error: false
        })

        const { getData } = this.props
        getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          })
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true
          })
        })
        
      }
      
      render() {
        const { data, loading, error } = this.state        
        
        if(loading) {
        return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }
        return <View {...this.props} data={data} />
      }
    }
}

export default WithData