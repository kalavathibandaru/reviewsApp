// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexnumber: 0}

  onClickLeftArrow = () => {
    const {indexnumber} = this.state
    if (indexnumber > 0) {
      this.setState(prevState => ({indexnumber: prevState.indexnumber - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {indexnumber} = this.state
    if (indexnumber < reviewsList.length - 1) {
      this.setState(prevState => ({indexnumber: prevState.indexnumber + 1}))
    }
  }

  render() {
    const {indexnumber} = this.state
    const {reviewsList} = this.props
    const requiredObject = reviewsList[indexnumber]
    const {imgUrl, username, companyName, description} = requiredObject
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <li className="profile-item">
          <img src={imgUrl} alt={username} />
          <div className="arrows-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-image"
              />
            </button>
            <p className="name">{username}</p>
            <button
              type="button"
              className="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-image"
              />
            </button>
          </div>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </li>
      </div>
    )
  }
}

export default ReviewsCarousel
