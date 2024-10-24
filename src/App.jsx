import { createContext, useState } from "react";
import "./App.css";
import Login from "./assets/Components/Login";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Dashboard from "./assets/Components/Dashboard";
import ForgotPassword from "./assets/Components/ForgotPassword";
import Theme from "./assets/Components/Theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
