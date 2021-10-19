import React from 'react'
//npm install react-router-dom
import {BrowserRouter ,Route , Link} from 'react-router-dom'
import Messages from './components/message/Messages'
import Tasks from './components/tasks/Tasks'
import Home from './components/static/Home'
import Contact from './components/static/Contact'
import About from './components/static/About'
import Services from './components/static/Services'
import UsersList from './components/users/UsersList'
import UserShow from './components/users/UserShow'

 function App() {
    return (
        <BrowserRouter>
        <div className='container'> 
            <Link to='/'>Home</Link>-
            <Link to='/users'>UsersList</Link>-
            <Link to='/contact'>Contact</Link>-
            <Link to='/task' >tasks </Link>
            

            <Route path='/' component={Home} exact={true}/>
            <Route  path ='/users' component={UsersList} exact={true}/>
            <Route path='/users/:id' component={UserShow}/>
            <Route  path ='/contact' component={Contact}/>
            <Route path='/task' component={Tasks}/>
            {/* <Messages/> */}
        </div>
        </BrowserRouter>
    )
}
export default App

// import React from 'react'
// import Employees from './Employees'
// import {msg1 ,msg2} from './msg'
// import Tasks from './components/tasks/Tasks'
// import UsersList from './components/users/UsersList'
// import Register from './components/auth/Register'

// function App() {
//     return (
//         <div>
//             <h1>{msg1} and {msg2}</h1>
//             React App
            
//             <Tasks/>
            
//         </div>
//     )
// }
// export default App
// //<Employees/>
// //<Register/>
// //<UsersList/>