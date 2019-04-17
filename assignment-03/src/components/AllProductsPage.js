import React, { Component } from 'react';
import ProductsList from './ProductsList';

const API_URL = 'http://localhost:8080/products';

class AllProductsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // Call on mount
    this.fetchProducts();
  }

  // Function to make API call
  fetchProducts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='container'>
          <ProductsList
            products={this.state.products}
          />
      </div>
    );
  }
}

export default AllProductsPage;
