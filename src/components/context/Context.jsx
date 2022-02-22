import { createContext,useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'

const EmployeesContext=createContext("");

export const EmpProvider=({children})=>{
    const navigate=useNavigate();

    const [employeeList,setEmployeeList]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        const data=await fetch("http://localhost:5000/employeeList")
        const response=await data.json()
        setEmployeeList(response)
    }
    
    const handleDelete=async (id)=>{
        setEmployeeList(employeeList.filter((employee)=>employee.id!=id))
        await fetch(`http://localhost:5000/employeeList/${id}`,{
            method:"DELETE",
            headers: {'Content-type': 'application/json'}
        })
        console.log("Deleted employee with Id:")
        navigate("/")
    }
    
    const handleUpdate=async (e)=>{
        e.preventDefault();
        const data={
            id:e.target.id.value,
            name:e.target.name.value,
            gender:e.target.gender.value,
            age:e.target.age.value,
            salary:e.target.salary.value
        }
        setEmployeeList(employeeList.map((emp)=>(emp.id==data.id)?data:emp));
        console.log("Updating the employee details with Id:"+e.target.id.value)
        await fetch(`http://localhost:5000/employeeList/${e.target.id.value}`,{
            method:"PUT",
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)
        })
        console.log("Succesfully updated in server")
        navigate("/")
    }

    const handleAdd=async (e)=>{
        e.preventDefault();
        const data={
            id:e.target.id.value,
            name:e.target.name.value,
            gender:e.target.gender.value,
            age:e.target.age.value,
            salary:e.target.salary.value
        }
        setEmployeeList([...employeeList,data])
        console.log("Adding the employee details with Id:"+e.target.id.value)
        const response= await fetch(`http://localhost:5000/employeeList`,{
            method:"POST",
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(data)
        })
        console.log("Succesfully added new employee in server")
        console.log("response received from server with response code as:"+response.code)
        navigate("/")
    }
    
    return (
        <EmployeesContext.Provider value={{
            employeeList,
            handleDelete,
            handleAdd,
            handleUpdate
        }}>
            {children}
        </EmployeesContext.Provider>
    )
};
export default EmployeesContext;


// export default employeeList;