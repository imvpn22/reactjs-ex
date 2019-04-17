import React from 'react';

const Product = (props) => {
  return <tr>
    <td> {props.product.id} </td>
    <td> {props.product.name} </td>
    <td> {props.product.quantity} </td>
    <td> {props.product.price} </td>
  </tr>
}

export default Product;
