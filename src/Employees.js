import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'

class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: [
                { id: 1, name: 'arjun', email: 'arjun@gmail', gender: 'male', department: 'tech' },
                { id: 2, name: 'sruthi', email: 'sruthi@gmail', gender: 'female', department: 'tech' },
                { id: 3, name: 'deepa', email: 'deepa@gmail', gender: 'female', department: 'hr' },
                { id: 4, name: 'jobin', email: 'jobin@gmail', gender: 'male', department: 'facility' },
            ]
        }
    }

    removeEmployee = (id) => {
        this.setState((prevState) => {
            return {
                employees: prevState.employees.filter(emp => emp.id !== id)
            }
        })        
    }

    addEmployee = (emp) => {
        this.setState((prevState) => {
            return {
                employees: prevState.employees.concat(emp)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Listing Employees - {this.state.employees.length} </h1> 
                <EmployeeTable data={this.state.employees} removeEmployee={this.removeEmployee} />
                <EmployeeForm addEmployee={this.addEmployee} />
            </div> 
        )
    }
}

export default Employees