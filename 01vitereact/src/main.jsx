import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <>
            <h1>React web page</h1>
        </>
    )
}

const ReactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = " | Aayush Jha"

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com' , target :'_blank'},
    'Click to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
