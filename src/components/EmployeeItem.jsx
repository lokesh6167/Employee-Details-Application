/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeItem({emp}) {
  return (
      <>
       <td>{emp.id}</td>
       <td>{emp.name}</td>
       <td>{emp.gender}</td>
       <td>{emp.age}</td>
       <td>{emp.salary}</td>
       <td><Link to={`/updateEmployee/${emp.id}`}>Update</Link></td>
       <td><Link to={`/deleteEmployee/${emp.id}`}>Delete</Link></td>
      </>
  )
}

export default EmployeeItem