import React from 'react';
import './Business.css';

//JS object
let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};

//React component
class Business extends React.Component {
  render() {
    return (
    <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{this.props.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.address}</p>
      <p>{this.props.city}</p>
      <p>{this.props.state} {business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.category}</h3>
      <h3 className="rating">{this.props.rating} stars</h3>
      <p>{this.props.reviewCount} reviews</p>
    </div>
  </div>
  </div>
    );
  }
};

export default Business;
