import React from 'react'
import {BsFillTrashFill} from "react-icons/bs"

function Table(props) {
    return (
        <div>
            <table className='table'>
                    <thead>
                        <tr>
                            <th> ## </th>
                            <th> name </th>
                            <th> gender </th>
                            <th>email</th>
                            <th> department</th>
                            <th>action</th>
                            <th>show</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(emp => {
                            return (
                                <tr key={emp.id}>
                                    <td> {emp.id} </td>
                                    <td> {emp.name} </td>
                                    <td> {emp.gender}</td>
                                    <td>{emp.email}</td>
                                    <td> {emp.department}</td>
                                    <td><button className='btn btn-danger btn-sm' onClick={()=>{props.handleRemove(emp.id)}}> <BsFillTrashFill/> </button></td>
                                    <td><button className='btn btn-primary btn-sm' onClick={()=>{props.handleAdd(emp)}}>show</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
    )
}
export default Table