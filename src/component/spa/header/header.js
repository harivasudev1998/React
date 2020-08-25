import React from 'react';
import NavigationBar from './navbar';
import '../contentcontainer/css/App.css'
import { Navbar, Nav, Container } from 'react-bootstrap'

class Header extends React.Component {
   
    render() { 
     

        return ( 
           <Container fluid={true} style={{flexShrink:"revert"}}>

            <div className="head " >
            
             <NavigationBar ></NavigationBar>       
          
    
            </div>
           </Container>
         );
    }
}
 
export default Header;