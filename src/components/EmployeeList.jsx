import React,{useContext} from 'react'
import EmployeeItem from './EmployeeItem'
import EmployeesContext from './context/Context'

function EmployeeList() {
    const {employeeList}=useContext(EmployeesContext)
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>
                    Employee Id:
                </th>
                <th>
                    Name:
                </th>
                <th>
                    Gender:
                </th>
                <th>
                    Age:
                </th>
                <th>
                    Salary:
                </th>
            </tr>
        </thead>
        <tbody>
                {employeeList.map((item,index)=>(
                    <>
                    <tr>
                    <EmployeeItem key={index} emp={item}/>
                    </tr>
                    </>
                ))}
        </tbody>
    </table>
    </>
  )
}

export default EmployeeList