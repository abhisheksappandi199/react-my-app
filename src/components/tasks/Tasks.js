import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import {BsListUl} from "react-icons/bs"
import Swal from 'sweetalert2'
import MDEmployeeTables from '../../MDEmployeeTable'

class Tasks extends Component {
    constructor()
    {
        super()
        this.state={
            employees: [
                { id: 1, name: 'arjun', email: 'arjun@gmail', gender: 'male', department: 'tech' },
                { id: 2, name: 'sruthi', email: 'sruthi@gmail', gender: 'female', department: 'tech' },
                { id: 3, name: 'deepa', email: 'deepa@gmail', gender: 'female', department: 'hr' },
                { id: 4, name: 'jobin', email: 'jobin@gmail', gender: 'male', department: 'facility' },
            ]
        }
    }
    handleRemove = (id) => {
        Swal.fire({
            icon: 'error',
            title: 'Are you sure?',
            text: 'You want to remove this employee',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        })
        .then((result) => {
            if(result.isConfirmed) {
                this.setState((prevState) => {
                    return {
                        employees: prevState.employees.filter(emp => emp.id !== id)
                    }
                }, () => {
                    Swal.fire({
                        title: 'Successfully removed employee', 
                        icon: 'success',
                        timer: 2000
                    })
                })
                
            }
        })
    }
    //handleRemove = (id) =>{
        //   const bool=window.confirm("are u sure")
        //   if(bool)
        //   {
        //     this.setState((prev)=>{
        //         return {
        //             employees : prev.employees.filter(e => e.id != id)
        //         }
        //     })
        //   }
    handleAdd = (emp) =>{
       alert(`id - ${emp.id}`)
    }
    handleAddRow =(ele)=>{
          this.setState((prev)=>{
              return {
                  employees : prev.employees.concat(ele)
              }
          })
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1> <BsListUl/> Listing Employess - {this.state.employees.length}</h1>
                        <MDEmployeeTables data={this.state.employees} handleRemove={this.handleRemove} handleAdd={this.handleAdd}/>
                        {/* <Table data={this.state.employees} handleRemove={this.handleRemove} handleAdd={this.handleAdd}/>  */}
                    </div>
                    <div className='col-md-4'>
                        <h1>Add Employee</h1>
                        <Form handleAddRow={this.handleAddRow}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tasks