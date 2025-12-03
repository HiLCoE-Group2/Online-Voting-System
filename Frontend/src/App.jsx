import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Feedback from './Pages/Feedback/Feedback.jsx';
import Login from './Pages/Login/Login.jsx';
import ForgetPassword from './Pages/Forget_password/Forget_password.jsx';
import './App.css';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/registration" element={<Registration />} />
         <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login/>}  />
        <Route path="/forget_password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  
  );
}

export default App;
