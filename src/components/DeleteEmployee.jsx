import React ,{useContext} from 'react'
import { Link ,useParams} from 'react-router-dom'
import EmployeesContext from './context/Context';

function DeleteEmployee() {
    const {employeeList,handleDelete}=useContext(EmployeesContext);
    const {id}=useParams();
    const emply=employeeList.filter(employee=>employee.id==id)
    const emp=emply[0]
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault()
        handleDelete(id)
    }}>
    <table>
        <tr>
            <th>Employee Id:</th>
            <td>{emp?.id}</td>
        </tr>
        <tr>
            <th>Name:</th>
            <td>{emp?.name}</td>
        </tr>
        <tr>
            <th>Gender:</th>
            <td>{emp?.gender}</td>
        </tr>
        <tr>
            <th>Age:</th>
            <td>{emp?.age}</td>
        </tr>
        <tr>
            <th>Salary:</th>
            <td>{emp?.salary}</td>
        </tr>
        <tr>
            <td>
                <button className='btn btn-primary' type="submit">Delete</button>
            </td>
            <td><Link to="/"><button className='btn btn-primary'>Cancel</button></Link></td>
        </tr>
    </table>
    </form>
    </>
  )
}

export default DeleteEmployee