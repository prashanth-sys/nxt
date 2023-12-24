// Write your code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  componentDidMount() {
    this.getImageDetails()
  }

  getImageDetails = async () => {
    const {match} = this.props
    const productId = match.params.id
    console.log(productId)
    const response = await fetch(`https://apis.ccbp.in/products/${productId}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.renderImageDetails()
    } else {
      this.renderFailureShow()
    }
  }

  renderImageDetails = () => (
    <div className="bg-container">
      <h1>shiva paravathi</h1>
    </div>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderImageDetails()}
      </>
    )
  }
}
export default ProductItemDetails
