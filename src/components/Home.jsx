import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ViewPassenger from "./ViewPassenger";

function Home() {
  return (
    <div>
      <div className="hero-image" style={{ height: 200 }}></div>
      <div>
        <ViewPassenger />
      </div>
      {/* <Link className="btn btn-info" to={"/view-bus"}>
        bus
      </Link> */}
    </div>
  );
}

export default Home;
