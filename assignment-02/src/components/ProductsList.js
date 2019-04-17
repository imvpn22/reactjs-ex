import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  render() {
    return (
      <div className="table-box">
        <h3> List of product </h3>
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Quantity </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map( product => (
              <Product
              key={product.id}
              product={product}/>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default ProductsList;
