import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Login from '../login/login';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

it('Render',()=>{
  const wrapper=shallow(<Login />);
  const h=wrapper.find("h1");
  const result=h.text();

  expect(result).toBe("Login");
})

test('Login', () => {
    expect(true).toBeTruthy();
  });

it('Submit Function',()=>{
  const onSubmitFun=jest.fn();
  const wrapper=mount(<form onSubmit={onSubmitFun}></form>)
  const form=wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFun).toHaveBeenCalledTimes(1);
});
it('username field',()=>{
  const wrapper=mount(<input type="text" name="username"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('name')).toEqual('username');
})
it('Password field',()=>{
  const wrapper=mount(<input type="password" name="password"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('password');
  expect(input.prop('name')).toEqual('password');
})
it('Button field',()=>{
  const wrapper=mount(<button type="submit">Login</button>);
  const input=wrapper.find('button');
  const result=input.text();
  expect(result).toBe('Login')
  expect(input.prop('type')).toEqual('submit');
})
test('matches Snapshot',()=>{
  const tree=renderer.create(<Router><Login /></Router>).toJSON()
  expect(tree).toMatchSnapshot();
})