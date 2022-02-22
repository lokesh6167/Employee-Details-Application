import React,{useContext,useState} from 'react'
import { Link ,useParams} from 'react-router-dom'
import EmployeesContext from './context/Context'

function UpdateEmployee() {
    // const location=useLocation();
    // console.log(location.state)
    // const {employee:emp}=location.state
    const {id}=useParams();
    const {employeeList,handleUpdate}=useContext(EmployeesContext)
    const emply=employeeList.filter((employee)=>employee.id==id)
    const emp=emply[0]
    const [allValues,setAllValues]=useState({
      id:emp.id,
      name:emp.name,
      gender:emp.gender,
      age:emp.age,
      salary:emp.salary
    })
    const handleFields=(e)=>{
      // console.log([e.target.name]+"="+e.target.value)
      setAllValues({...allValues,[e.target.name]:e.target.value})
    }
     return (
    <>
    <h1 className="display-2 text-primary">Update Employee:</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="id">Employee Id:</label>
          <input type="text" id="id" className="form-control" name="id" onChange={handleFields} value={allValues.id}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" name="name" onChange={handleFields} value={allValues.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" className="form-control" name="gender" onChange={handleFields} value={allValues.gender}/>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" className="form-control" name="age" onChange={handleFields} value={allValues.age}/>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input type="number" id="salary" className="form-control" name="salary" onChange={handleFields} value={allValues.salary}/>
        </div>
        <table>
        <tr>
            <td><button className='btn btn-primary' type="submit">Update</button></td>
            <td><Link to="/"><button className='btn btn-primary'>Cancel</button></Link></td>
        </tr>
        </table>
      </form>
      </>
  )
}

export default UpdateEmployee