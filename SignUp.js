import React,{Component} from 'react'

import './SignUP.css'
import user_icon from './assets/user.jpeg'
import email_icon from './assets/email.jpg'
import pass_icon from './assets/images.jpeg' 
class SignUp extends Component{
    render(){
        return(

            <div className="container">
                <div className="header">
                    <h1>SignUp Page</h1>
                </div>
               
                <div className="input-container">
                <img className="image" src={user_icon}/>
                <input type="text" className="input" placeholder="Name"/>
                </div>

                <div className="input-container">
                <img src={email_icon}/>
                <input type="text" className="input" placeholder="Email"/>
                </div>

                
                <div className="input-container">
                <img src={pass_icon}/>
                <input type="text" className="input" placeholder="Password"/>
                </div>

                <div className="input-container">
                <img src={pass_icon}/>
                <input type="text" className="input" placeholder="Confirm Password"/>
                </div>


                <div >
                    <button>Create Account</button>
                </div>

            </div>
        )
    }
}

export default SignUp