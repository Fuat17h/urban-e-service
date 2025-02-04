import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import Dashboard from "./app/dashboard/page"; // Adjust the path if needed
function App() {

  return (
    <>
       <Router>
      
          <Routes>
          
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
       
    </Router>
    </>
  )
}

export default App
