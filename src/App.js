import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBus from "./components/Admin/AddBus";
import ViewBus from "./components/Admin/ViewBus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/Login";

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
            <Route path = "/login" element ={<LoginForm/>}/>
          </Routes>
        </main>
      </React.Fragment>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
