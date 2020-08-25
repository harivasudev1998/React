import React from 'react';
import '../css/App.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';


class Register extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            confirmpassword:'',
            invalidfirstname: false,
            invalidlastname: false,
            invalidusername: false,
            invalidpassword: false,
            invalidconfirmpassword: false,
            invalidsubmit: true,
            existuser: []


        }
       
    }

    signUp = (event) => {
        let signupRequestBody = {
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "username": this.state.username,
            "password": this.state.password,
            "confirmpassword": this.state.confirmpassword
        }
        console.log(this.state)
        axios.get('http://localhost:3000/users')
            .then(response => {
                var existuser = response.data.find(user => user.username === this.state.username)
                this.setState({ existuser: existuser })
            }, error => { console.error(error) })
        if (this.state.existuser.length == 0) {
            axios.post('http://localhost:3000/users', signupRequestBody)
                .then(response => {
                    console.log('signUp done')
                    this.props.history.push('/login')
                }, error => {
                    console.error(error)
                })
        }
    }

    getfirstname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidfirstname: true })
        } else {
            this.setState({ invalidfirstname: false, firstname: event.target.value })
        }
    }

    
    getlastname=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidlastname: true })
        } else {
            this.setState({ invalidlastname: false, lastname: event.target.value })
        }

    }

    getusername=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidusername: true })
        } else {
            this.setState({ invalidusername: false, username: event.target.value })
        }

    }


    getpassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value === '') {
            this.setState({ invalidpassword: true })
        } else {
            this.setState({ invalidpassword: false, password: event.target.value })
        }
        
        
       
    }

    getconfirmpassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        if (event.target.value !== this.state.password) {
            this.setState({ invalidconfirmpassword: true })
        } else {
            this.setState({ invalidconfirmpassword: false, confirmpassword: event.target.value })
        }
        
        this.validsubmit();
    }

    validsubmit = () => {
        console.log(this.state)
        if (this.state.invalidfirstname || this.state.invalidlastname ||  this.state.username || this.state.password ) {
            console.log('validation :success')
            this.setState({ invalidsubmit: false })
          
        } else {
            console.log('validation:fail')
            this.setState({ invalidsubmit: true })
        }
        return this.state.invalidsubmit
    }


    render() { 
        const buttonclr={
            backgroundColor:"darkgreen",
            color:"white",
            padding:'15px',
            // margin:'10px',
            border:'none',
            opacity: 0.9,
           
            
        } 
        return ( 
            <Container>
            <div className="contain" style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'210px'}}>
                <h1 style={{color:"blue"}}>Sign Up</h1>
                {/* {this.state.existuser.length!=0 &&<h3 className='error'>User already exist !!! "Signup with different username"</h3>} */}
                <form style={{textAlign:"center",textAlign:"left",marginLeft:"40%"}}>
                    
                    <b><label>First Name: </label></b>
                    <input type='text' id="firstname" name="firstname" onChange={this.getfirstname}></input>
                    {this.state.invalidfirstname && <span className='error'>FirstName is required</span>}
                    <br></br>
                    {/* firstname: { this.state.firstname } */}
                    <br></br>

                    <b><label>Last Name: </label></b>
                    <input type='text' id="lastname" name="lastname" onChange={this.getlastname}></input>
                    {this.state.invalidlastname && <span className='error'>LastName is required</span>}
                    <br></br>
                    {/* lastname: { this.state.lastname } */}
                    <br></br>

                    <b><label>Username: </label></b>
                    <input type='text' id="username"  onChange={this.getusername}></input>
                    {this.state.invalidusername && <span className='error'>Username must not be empty</span>}
                    <br></br>
                    {/* username: { this.state.username } */}
                    <br></br>

                    <b><label>Password:</label></b>
                    <input type="password" id="password"  onChange={this.getpassword}></input>
                    {this.state.invalidpassword && <span className='error'>Password is required</span>}
                    <br></br>
                    {/* Password: { this.state.password } */}
                    <br></br>

                    <b><label>Confirm Password:</label></b>
                    <input type="password" id="confirmpassword"  onChange={this.getconfirmpassword}></input>
                    {this.state.invalidconfirmpassword && <span className='error'>Confirm Password should match with Password</span>}
                    <br></br>
                 
                    <br></br>



                    <input type="button" onClick={this.signUp} style={{marginLeft:"80px"}} value="SignUp" disabled={this.state.invalidsubmit}></input>
                    <br></br>
                    <br></br>
                    {/* disabled={this.state.invalidsubmit} */}
                    
                </form>
            </div>
            </Container>
         );
    }
}
 
export default Register;