import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Feed />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Feed />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
