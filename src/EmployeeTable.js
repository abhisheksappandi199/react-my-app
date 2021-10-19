import React from 'react'
import PropTypes from 'prop-types'

function EmployeeTable(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th> # </th>
                    <th> name </th>
                    <th> email </th>
                    <th> gender </th>
                    <th> department </th>
                    <th> action </th>
                </tr>
            </thead>
            <tbody>
                { props.data.map(function (emp) {
                    return (
                        <tr key={emp.id}>
                            <td> {emp.id} </td>
                            <td> {emp.name} </td>
                            <td> {emp.gender} </td>
                            <td> {emp.email}</td>
                            <td> {emp.department} </td>
                            <td> <button onClick={() => {
                                props.removeEmployee(emp.id)
                            }}> remove </button> </td> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

EmployeeTable.propTypes ={
    data:PropTypes.array.isRequired
}

export default EmployeeTable