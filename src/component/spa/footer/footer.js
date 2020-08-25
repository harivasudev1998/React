import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'

class Footer extends React.Component {
    
    render() { 
        const logout = {
            color:"white",
            backgroundColor:"cyan",
            display:'inline-block',
            marginLeft:'45%',
            width:'100px',
            height:'50px',
            textDecoration:'none',
            border:'none'
            
        }
        return ( 
            <Container>
            <Navbar fixed="bottom" bg="light" expand="lg md xl">
            <Nav className="ml-auto">
            <div className="foot">

   
               

                <span>
             
                <button style={logout}><Link to="/login" style={{ textDecoration:'none'}}>Logout</Link></button>
            </span>

                </div>
                </Nav>
                </Navbar>
                </Container>
         );
    }
}
 
export default Footer;