import React from 'react';
import { render } from '@testing-library/react';
import AddProduct from '../product/addproduct';

it('renders without crash',()=>{
  render(<AddProduct></AddProduct>)
})