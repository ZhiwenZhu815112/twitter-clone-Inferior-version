import "./css/App.css";
import Signup from './server/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './server/Dashboard';
import Login from "./server/Login";
import PrivateRoute from "./server/PrivateRoute";
import Home from "./components/Home";
import ForgotPassword from './server/ForgotPassword';
import { AuthProvider } from "./server/firebase";


function App() {

  return (
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path="/home/Message" element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>} />
              </Routes>
            </AuthProvider> 
          </Router>
    
  );
}
export default App;
