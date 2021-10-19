import React from 'react'
import axios from 'axios'


class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            gender: '',
            department: '',
        }
    }

    handleNameChange = (e) => {
        let name = e.target.value
        this.setState({ name })
    }

    handleEmailChange = (e) => {
        let email = e.target.value
        this.setState({ email })
    }

    handleGenderChange = (gender) => {
        this.setState({ gender })
    }

    handleDeptChange = (e) => {
        const department = e.target.value 
        this.setState({ department })
    }
//     handleBlur = (name,e)=>{
//         e.target.style.background = "white"
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET',`https://api.genderize.io/?name=${name}`)
//         xhr.send()

//         xhr.onload = () =>{
//             const users=JSON.parse(xhr.responseText)
//             console.log(users);
//             this.setState({gender : users.gender})
            
//         }
//         xhr.onerror = function(){
//            console.log(xhr.responseText);
//         }
//    }
  handleBlur = (name) =>{
      axios.get(`https://api.genderize.io/?name=${name}`)
      .then((response)=>{
         // console.log(response.data.gender);
         const gender=response.data.gender 
         this.setState({gender})
      })
      .catch((error)=>{
          console.log(error.message);
          
      })
  }
  
   handleFocus = (e) =>{
       e.target.style.background = 'pink'
   }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()), 
            name: this.state.name,
            email: this.state.email, 
            gender: this.state.gender, 
            department: this.state.department
        }
        if(formData.name == '') {
            alert('name cant be blank')
        } else {
            this.props.addEmployee(formData)
            this.setState({
                name: '',
                email: '',
                department: '',
                gender: ''
            })
        }
    }
    render() {

        return (
            <div> 
                <h2>Add Employee</h2> 
                <form onSubmit={this.handleSubmit}>
                    <label >Name</label>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        onBlur={(e)=>{this.handleBlur(this.state.name)}} 
                        onFocus={this.handleFocus}
                    /><br />

                    <label>Email</label>
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.handleEmailChange} 
                    /> <br />

                    <label> gender </label> 
                        <input 
                            type="radio" 
                            name="gender" 
                            checked={this.state.gender == 'male' }
                            onChange={() => {
                                this.handleGenderChange('male')
                            }} 
                        /> male

                        <input 
                            type="radio" 
                            name="gender"
                            checked={this.state.gender == 'female' } 
                            onChange={() => {
                                this.handleGenderChange('female')
                            }} 
                        /> female
                    <br/> 


                    <label>department</label> 
                    <select value={this.state.department} onChange={this.handleDeptChange}>
                        <option value=""> select </option>
                        <option value="tech"> technology </option>
                        <option value="hr"> human resource </option>
                        <option value="facility"> facility management </option>
                    </select> <br/>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            )
        }   
    }
export default EmployeeForm