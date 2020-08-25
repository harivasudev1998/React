import React from 'react';
import '../css/App.css';
import { createHashHistory } from 'history';
import axios from 'axios';
import { Container } from 'react-bootstrap';

class Login extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'',
            // value: '',
            wrongPassword: false,
            wrongUsername: false,
            invalidUsername: true,
            invalidPassword: true

        }
   
    }

    login = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data })
                console.log(this.state.users)
                var loguser = this.state.users.find(user => user.username === this.state.username)
                console.log(loguser)
                if (loguser === undefined) {
                    this.setState({ wrongUsername: true })
                } else {
                    if (loguser.password === this.state.password) {
                        // this.setState({ username: loguser.firstname })
                        this.props.history.push('/')
                    } else {
                        this.setState({ wrongPassword: true })
                    }
                }
            }, error => { console.error(error); })

    }

    getusername=(event)=>{
    
        console.log(event.target.value)
        this.setState({ wrongUsername: false })
        this.setState({username: event.target.value})
        if (event.target.value==='') {
            this.setState({invalidUsername : true})
            
        }else{
            this.setState({invalidUsername : false})
            this.setState({ username: event.target.value })
        }
    }

    getpassword=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ wrongPassword: false })
        if(event.target.value === ''){
            this.setState({invalidPassword : true})
        }else{
            this.setState({invalidPassword:false})
        this.setState({ password: event.target.value })
        }
    }

      
    render() { 
        // const buttonclr={
        //     backgroundColor:"green",
        //     color:"white",
        //     padding:'15px',
        //     border:'none',
        //     opacity: 0.9,
    
            
        // } 
        return ( 
            <Container>
            <div className="contain" style={{backgroundColor:"lightgoldenrodyellow",paddingTop:'10px',paddingBottom:'330px'}}>
                <h1 style={{color:"blue"}}>Login</h1>
                {this.state.wrongUsername && <h3 className='error'>Invalid Username</h3>}
                {this.state.wrongPassword && <h3 className='error'>Invalid Password</h3>}
                <form  >
                {/* <div className="container"> */}
                    <b><label >Username:  </label></b>
                    <input type='text' id="username" onChange={this.getusername}></input>
                    {this.state.invalidUsername && <span className='error' name="username">Username is required</span>}
                    <br></br>
                    {/* username: { this.state.username } */}
                    <br></br>

                    <b><label>Password:  </label></b>
                    <input type="password" id="password" onChange={this.getpassword} name="password"></input>
                    {this.state.invalidPassword && <span className='error'>Password is required</span>}
                    {/* Password: { this.state.password } */}
                    <br></br>
                    <br></br>
                    
                    {/* <a href="/register">Forgot Password.?</a>&nbsp; */}
                    <input type="button" onClick={this.login} disabled={this.state.invalidUsername || this.state.invalidPassword} value="Login"></input>
                    <br></br>
                    <br></br>
                    
                  {/* </div>   */}
                </form>
            </div>
            </Container>
         );
    }
}
 
export default Login;
export const history = createHashHistory();