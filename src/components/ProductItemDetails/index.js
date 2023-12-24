// Write your code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  state = {productData: {}}

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
      const updatedData = {
        id: data.id,
        imageURL: data.image_url,
        title: data.title,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
      }
      this.setState({productData: updatedData})
    } else {
      this.renderFailureShow()
    }
  }

  renderImageDetails = () => {
    const {productData} = this.state
    const {imageURL} = productData
    return (
      <div className="bg-container">
        <h1>hii</h1>
        <img src={imageURL} alt="krishna" />
      </div>
    )
  }

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
