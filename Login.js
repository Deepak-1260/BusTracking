import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './Login.css'
import email_icon from './assets/email.jpg'
import pass_icon from './assets/images.jpeg'
import bus_image from './assets/bus.png' 
class Login extends Component{
    render(){
        return(
            
            <div className="container">

                
                <div className="header">
                    <h1>Login Page</h1>
                </div>
               
                <div className="input-container">
                <img src={email_icon}/>
                <input type="text" className="input" placeholder="Email"/>
                </div>

                
                <div className="input-container">
                <img src={pass_icon}/>
                <input type="text" className="input" placeholder="Password"/>
                </div>
                <div >
                   <button><Link to="/SignUp">SIGNUP</Link></button> 
                    <button><Link to="/HomeScreen">LOGIN</Link></button>
                </div>
                <div>
                    <h5>Forgot Password</h5>
                    <img src={bus_image} className="busimage"/>
                </div>
            </div>


        )
    }
}

export default Login