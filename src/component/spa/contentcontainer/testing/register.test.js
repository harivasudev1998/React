import React from 'react';
import { render } from '@testing-library/react';
import Register from '../register/register';

it('renders without crash',()=>{
  render(<Register></Register>)
})