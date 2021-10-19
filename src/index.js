//es6 Module Loader : front end - react , angular
//import varname from 'package'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Messages from './components/message/Messages'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App/>,document.getElementById('root'))
// ReactDOM.render(<Messages/>,document.getElementById('root'))
// common js module loader - backend - node, express 
// const varName = require('package')