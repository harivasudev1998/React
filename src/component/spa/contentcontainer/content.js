import React from 'react';
import AllProducts from './product/allproducts';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import AddProduct from './product/addproduct';
import EditProduct from './product/editproduct';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
            
            <Switch>
                <Route exact path='/' component={Home}></Route>    
                <Route path='/products' component={AllProducts}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/editproduct' component={EditProduct}></Route>
                

            </Switch>   
          
        </div>
         );
    }
}
 
export default Content;