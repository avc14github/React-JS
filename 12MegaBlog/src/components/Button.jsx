import React from "react";

function Button({
    childer,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}){
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
            {childer}
        </button>
    )
}

export default Button;