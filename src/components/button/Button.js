import React from 'react';
import './Button.css'

function Button({label}) {
    return <button data-testid="button" className="button-style">{label}</button>
}

export default Button;
