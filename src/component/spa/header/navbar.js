import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'


class NavigationBar extends React.Component {
    
    render() { 
        const menuitem = {
            color:"red",
            backgroundColor:"pink",
            display:'inline-block',
            padding: '10px',
            margin: '5px'
            
        }


        return ( 
            <Container>
            <Navbar fixed="top" bg="light" expand="lg md xl">
               
               
                    <Nav className="ml-auto">
                    <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link  to="/" style={{ textDecoration:'none'}}>Home</Link>
                     </li>
                     <li style={menuitem}>  
                        <Link  to="/products" style={{ textDecoration:'none'}}>Products</Link>
                       </li>
                       <li style={menuitem}>
                       <Link  to="/addproduct" style={{ textDecoration:'none'}}>Add Product</Link>
                      </li>
                      <li style={menuitem}> 
                        <Link  to="/login" style={{ textDecoration:'none'}}>Login</Link>
                        </li>
                        <li style={menuitem}>
                       <Link  to="/register" style={{ textDecoration:'none'}}>SignUp</Link>
                       </li>
                       </ul>
                        {/* <span className="menulist">{this.state.username}</span> */}
                    </Nav>
             
            </Navbar> 
            </Container>

        );
    }
}
 
export default NavigationBar;