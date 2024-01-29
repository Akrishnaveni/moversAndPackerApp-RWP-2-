import {Component} from 'react'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {data: {}, apiStatus: apiConstants.initial, activeTabId: ''}

  componentDidMount() {
    this.getApiData()
  }

  getApiData = async () => {
    this.setState({
      apiStatus: apiConstants.progress,
    })
    const url = 'https://jsonkeeper.com/b/COZC'
    const response = await fetch(url)
    const responseData = await response.json()
    console.log(responseData)
  }

  render() {
    const {apiStatus, data} = this.state

    return <h1>Home</h1>
  }
}

export default Home
