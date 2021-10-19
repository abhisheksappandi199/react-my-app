import React from 'react'
import axios from 'axios'

class MessageForm extends React.Component { 
    constructor() {
        super()
        this.state = {
            body : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body: this.state.body 
        }
        
        axios.post('http://localhost:3033/messages',formData)
        .then((response)=>{
            const message =response.data
            this.props.addMessage(message)
            this.setState({body:''})
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    render() {
        return (
            <div>
                <h2>Add Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        value={this.state.body} 
                        onChange={this.handleChange} 
                        name="body"
                    ></textarea>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default MessageForm