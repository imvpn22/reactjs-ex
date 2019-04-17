import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  render() {
    return (
      <div className="table-box">
        <h3> List of product </h3>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Quantity </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products && this.props.products.length > 0
              ? this.props.products.map( product => (
              <Product
              key={product.id}
              product={product}/>
            ))
              :
              <tr>
                <td > Nothing to show </td>
              </tr>
            }
          </tbody>
        </table>

      </div>
    );
  }
}

export default ProductsList;
