import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddBus from "./components/Admin/AddBus";
import AddPackege from "./components/Admin/AddPackege";
import AdminHome from "./components/Admin/AdminHome";
import ViewBus from "./components/Admin/ViewBus";
import ViewPackege from "./components/Admin/ViewPackege";
import ViewUserDetails from "./components/Admin/ViewUserDetails";
import ViewUserPackage from "./components/Admin/ViewUserPackage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/Login";
import ViewPassenger from "./components/ViewPassenger";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/view-bus" element={<ViewBus />} />
            <Route path="/add-bus" element={<AddBus />} />
            <Route path="/add-bus/:id" element={<AddBus />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/view-package" element={<ViewPackege />} />
            <Route path="/add-package" element={<AddPackege />} />
            <Route path="/add-package/:id" element={<AddPackege />} />
            <Route path="/AdminHome" element={<AdminHome />} />

            {/* Passenger */}
            <Route path="/ViewPassenger" element={<ViewPassenger />} />
            <Route path="/view-user-details" element={<ViewUserDetails />} />
            <Route
              path="/view-user-details/:id"
              element={<ViewUserPackage />}
            />
          </Routes>
        </main>
      </React.Fragment>

      <div>
        
      </div>
    </div>
  );
}

export default App;
