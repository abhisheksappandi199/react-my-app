import React from 'react' 
import axios from 'axios'

class UserShow extends React.Component { 
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount(){ 
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const user = response.data 
                this.setState({ user })
            })
    }

    render() {
        return (
            <div>
              <h1>User Deatils</h1>
              <p>Name : {this.state.user.name}</p>
              <p>Email : {this.state.user.email}</p>
            </div>
        )
    }
}

export default UserShow