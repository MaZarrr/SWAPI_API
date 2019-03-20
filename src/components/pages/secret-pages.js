import React from 'react'
// import './people-page.css'
import {Redirect} from 'react-router-dom'

const SecretPage = ({ isLoggedIn }) => {

    if(isLoggedIn) {
        return (
            <div className="jumpotron text-center">
                <h1>This Page is full of Secret!!!</h1>
            </div>    
            )
    }
    // return <p>You should not see this!!!</p>
    return <Redirect to="/login" />
}


export default SecretPage