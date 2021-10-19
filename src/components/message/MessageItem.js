import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import moment from 'moment'
import { BsFillTrashFill , BsPencil } from "react-icons/bs";

 class MessageItem extends Component {
     constructor(props)
     {
         super(props)
         this.state={
             body : props.body,
             editMode :false,
             mouseOver:false
         }
     }
    handleRemove=()=>{
       const confirmRemove = window.confirm("are you sure")
       if(confirmRemove){
           axios.delete(`http://localhost:3033/messages/${this.props.id}`)
           .then((response)=>{
               const dat = response.data
               this.props.removeMessage(dat.id)
           })
           .catch((error)=>{
               console.log(error.message);
               
           })
       }
    }

    handleEdit = () => {
        this.setState((prevState) => {
            return {
                editMode: !prevState.editMode
            }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body: this.state.body ,
            createdAt : new Date()
        }
        axios.put(`http://localhost:3033/messages/${this.props.id}`, formData) 
            .then((response) => {
                const message = response.data 
                this.setState((prevState) => {
                    return {
                        editMode: !prevState.editMode
                    }
                })
                this.props.updateMessage(message)
            })
    }
    handleDisplay = ()=>{
        alert(moment(this.props.createdAt).format('dddd MMMM Do YYYY, h:mm:ss a'))
    }
    handleOver = () =>{
         this.setState((prev)=>{
             return{
                 mouseOver : true
             }
         })
    }
    handleOut =()=>{
        this.setState((prev)=>{
            return{
                mouseOver : false
            }
        })
    }
    handleChange =(e)=>{
       this.setState({ [e.target.name] : e.target.value})
    }
    render() {
        return (
            <div>
                { 
                    this.state.editMode ? (
                        <form>
                            <input 
                                type="text" z
                                value={this.state.body}
                                onChange={this.handleChange}
                                name="body"
                            />
                        </form>
                    ) : <p> { this.props.body } </p> 
                }
                <small  onMouseOver={this.handleOver } onMouseOut={this.handleOut} >{!this.state.mouseOver ? moment(this.props.createdAt).fromNow()  : moment(this.props.createdAt).format('dddd MMMM Do YYYY, h:mm:ss a') }
                    
                </small>
                <BsFillTrashFill onClick={this.handleRemove}/>
                {
                    this.state.editMode ? <button onClick={this.state.editMode ? this.handleSubmit : this.handleEdit} > { this.state.editMode ? 'update' : 'edit'} </button>: <BsPencil onClick={this.state.editMode ? this.handleSubmit : this.handleEdit} />
                    
                }
                {/* {
                    this.state.editMode ? <button onClick={this.handleSubmit}> update </button> : <button onClick={this.handleEdit}> edit </button> 
                } */}

                
                <hr/>
            </div>

        )
    }
}
MessageItem.propTypes ={

}

export default MessageItem