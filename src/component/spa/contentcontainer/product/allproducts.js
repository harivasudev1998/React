import React from 'react';
import Product from './product';
import { Container,Card } from 'react-bootstrap';



class AllProducts extends React.Component {
   
    render() {
        const prstyle={
            color:"red",
            textAlign:"center",
            fontSize:'50px',
            fontFamily:'cursive'
        } 
        return (  
            <Container style={{flexWrap:"wrap"}}>
              
            <div style={{backgroundColor:"lightgoldenrodyellow",paddingBottom:'200px',paddingTop:"20px"}}>
                
                
                <h2 style={prstyle}>Products</h2>
                <br></br>
                <Product></Product>

                
            </div>
      
            </Container>
        );
    }
}
 
export default AllProducts;