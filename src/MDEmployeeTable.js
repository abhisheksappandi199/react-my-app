import React from 'react' 
import { MDBDataTableV5 } from 'mdbreact' // npm install mdbreact

const MDEmployeeTable = (props) => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name', 
                sort: 'asc'
            },
            {
                label: 'Email',
                field: 'email'
            },
            {
                label: 'Gender',
                field: 'gender',
            },
            { 
                label: 'Department', 
                field: 'department'
            },
            {
                label: 'Actions',
                field: 'actions'
            }
        ],
        rows: props.data.map((emp) => {
            return {
                name: emp.name,
                email: emp.email,
                gender: emp.gender,
                department: emp.department,
                actions: <button className="btn btn-danger" onClick={function(){
                    props.handleRemove(emp.id)
                }}>remove</button> 
            }
        })
    }
    return <MDBDataTableV5 data={data} searchTop searchBottom={false}/>
}

export default MDEmployeeTable