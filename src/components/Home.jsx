import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>Home</div>
      <Link className="btn btn-info" to={"/view-bus"}>
        bus
      </Link>
    </div>
  );
}

export default Home;
