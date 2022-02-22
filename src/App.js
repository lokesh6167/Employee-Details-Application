import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import Home from "./components/Home";
import { EmpProvider } from "./components/context/Context";

function App() {
  return (
    <Router>
      <div className="container">
        <EmpProvider>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
              <Route path="/deleteEmployee/:id" element={<DeleteEmployee />} />
            </Routes>
        </EmpProvider>
      </div>
    </Router>
  );
}

export default App;
