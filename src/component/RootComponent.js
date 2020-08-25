import React from "react"
import Header from "./spa/header/header";
import Content from "./spa/contentcontainer/content";
import Footer from "./spa/footer/footer";
import { Container } from "react-bootstrap";

class RootComponent extends React.Component{

    

    render(){
        return (
            <Container>
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
            </Container>
        )
    }

}


export default RootComponent