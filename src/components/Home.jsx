import React from "react";
import EmployeeList from "./EmployeeList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="display-2 text-primary">Employee Details:</h1><br/>
      <Link to="/addemployee" className="btn-primary">
          <button className="btn-primary">Add Employee</button>
          </Link>
      <EmployeeList/>
    </>
  );
}

export default Home;
