import React from 'react'
// import './people-page.css'
import {Redirect} from 'react-router-dom'


const LoginPage = ({isLoggedIn, onLogin}) => {
      
    if(isLoggedIn) {
          return <Redirect to="/" />
      }
        return (
            <div className="jumpotron">
                <p>This to see is full of Page!!</p>
                <button className="btn btn-primary"
                onClick={onLogin}
                > Login
                </button>
            </div>    
            )
    }

export default LoginPage