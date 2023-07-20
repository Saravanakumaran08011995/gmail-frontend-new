import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing the components

import Inbox from "./components/Inbox";
import Compose from "./components/Compose";
import Sent from "./components/Sent";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Starred from "./components/Starred";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        {user && <Header />}

        <div className="content-wrapper">
          {user && <Sidebar />}

          <div className="routes-wrapper">
            <Routes>
              <Route path="/" element={user ? <Compose /> : <Register />} />
              <Route path="/register" element={!user ? <Register /> : <Compose />} />
              <Route path="/login" element={!user ? <Login /> : <Compose />} />
              {user && (
                <>
                  <Route path="/compose" element={<Compose />} />
                  <Route path="/inbox" element={<Inbox />} />
                  <Route path="/starred" element={<Starred />} />
                  <Route path="/sent" element={<Sent />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
