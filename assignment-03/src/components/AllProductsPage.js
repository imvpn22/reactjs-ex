import React, { Component } from 'react';
import ProductsList from './ProductsList';

import products from '../product.json';

class AllProductsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: products
    }
  }

  render() {
    return (
      <div>
        <h1> All Products </h1>
          <ProductsList
            products={this.state.products}
          />
      </div>
    );
  }
}

export default AllProductsPage;
