import React from 'react';
import { render } from '@testing-library/react';
import ProductDetail from '../product/productdetail';

it('renders without crash',()=>{
  render(<ProductDetail></ProductDetail>)
})