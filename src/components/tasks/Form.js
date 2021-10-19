import React, { Component } from 'react'

class Form extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            email:'',
            gender:'',
            department:''
        }
    }
    handleSubmit =(e) =>{
      e.preventDefault()
      const formdate={
        id: Number(new Date()), 
        name: this.state.name,
        email: this.state.email, 
        gender: this.state.gender, 
        department: this.state.department
      }
      this.props.handleAddRow(formdate)
      this.setState({
        name:'',
        email:'',
        gender:'',
        department:''
      })
    }
    handleChange =(e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    handlegenderChange =(gender)=>{
        this.setState({gender})
    }
    handledeptChange =(e)=>{
        const department = e.target.value
        this.setState({department})
    }
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>

                <div className='form-group'>
                    <label htmlFor='name'>Name</label> 
                    <input
                        type="text"
                        name="name"
                        id='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        className='form-control'
                    /><br/>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>email</label> 
                    <input
                        type="text"
                        name="email"
                        id='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className='form-control'
                    /><br/>
                </div>

                
              gender <input
              type='radio'
              name='gender'
              value={this.state.gender == "male"}
              onChange={()=>{this.handlegenderChange('male')}}
              />male
              <input
              type='radio'
              name='gender'
              value={this.state.gender == "female"}
              onChange={()=>{this.handlegenderChange('female')}}
              />female<br/>
              department <select value={this.state.department} onChange={this.handledeptChange}>
                  <option value=''>select</option>
                  <option value='tech'>tech</option>
                  <option value='hr'>hr</option>
                  <option value='fac'>fac</option>
              </select><br/>
              <input type='submit'/>
              </form>  
            </div>
        )
    }
}

export default Form