import React from 'react' 
import axios from 'axios'
import MessageForm from './MessageForm'
import MessageItem from './MessageItem'

class Messages extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            bool:false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3033/messages')
            .then((response) => {
                const messages = response.data 
                this.setState({ messages })
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    addMessage = (message) => {
        this.setState((prev)=>{
            return {
                messages : [message].concat(prev.messages)
            }
        })
    }
    removeMessage =(id) =>{
        this.setState((prev)=>{
            return {
                messages : prev.messages.filter(e => e.id != id)
            }
        })
    }
    updateMessage = (msg) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.map((message) => {
                    if(message.id == msg.id) {
                        return Object.assign({}, message, msg)
                    } else {
                        return Object.assign({}, message)
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h2>My Message Board - { this.state.messages.length } </h2>
                <MessageForm addMessage={this.addMessage}/>
                {
                    (this.state.messages.map(e =>{
                        return (
                            <MessageItem 
                               key={e.id}
                               id={e.id}
                               body={e.body}
                               createdAt={e.createdAt}
                               removeMessage={this.removeMessage}
                               updateMessage={this.updateMessage}
                               />
                        )}
                    ))
                }      
            </div>
        )
    }
}

export default Messages