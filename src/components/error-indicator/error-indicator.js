import React from 'react'
import './error-indicator.css'
import icon from './jobicon.png'

const ErrorIndicator = () => {
return (
    <div className="error-indicator">
    <img src={icon} alt="error icon"></img>
    <span className="boom">BOOM!</span>
    <span>
        comefing has terribly wrong
    </span>
    <span>(but we already send droids to fix it)</span>
    </div>
    )
}

export default ErrorIndicator