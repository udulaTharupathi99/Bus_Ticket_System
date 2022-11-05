import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div>
      <div className="hero-image" style={{height:200}}>ss</div>
      <div>Time table</div>
      <Link className="btn btn-info" to={"/view-bus"}>
        bus
      </Link>
    </div>
  );
}

export default Home;
