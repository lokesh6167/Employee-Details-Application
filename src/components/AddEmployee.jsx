import React,{useContext}from "react";
import { Link } from "react-router-dom";
import EmployeesContext from "./context/Context";
function AddEmployee() {
   const {handleAdd}=useContext(EmployeesContext) 
  return (
    <>
      <h1 className="display-2 text-primary">Add Employee:</h1>
      <form onSubmit={handleAdd}>
        <div className="form-group">
          <label htmlFor="id">Employee Id:</label>
          <input type="text" id="id" name="id" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input type="number" id="salary" name="salary" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Add</button>
          <Link to="/"><button className="btn btn-primary">Cancel</button></Link>
        </div>
      </form>
    </>
  );
}

export default AddEmployee;
