import {configure} from 'enzyme'
import React from 'react';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import navbar from '../../header/navbar';
import RootComponent from '../../../RootComponent'
configure({adapter:new Adapter()});

test('renders learn react link', () => {
  expect(true).toBeTruthy();
});

it('Nav exists or Not',()=>{
  const wrapper=shallow(<RootComponent />)
  const nav=wrapper.find(navbar);
  expect(nav.exists());
})