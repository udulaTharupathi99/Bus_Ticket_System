import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div
      className="card w-75 mx-auto mt-5 bg-light p-5 shadow-lg"
      style={{ borderRadius: 30 }}
    >
      <div className=" card border shadow-lg ">
        <h2 style={{ borderRadius: 30, textAlign: "center" }}>
          Admin Dashboard
        </h2>

        <div class="py-5">
          <div class="container">
            <div class="row mx-auto ">
              <div class="col-md-3 mx-auto">
                <div style={{ height: 190 }} class="card text-center shadow-lg">
                  <div class="card-block">
                    <img
                      style={{ height: 130, width: 130 }}
                      class="card-img-top"
                      src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                      alt="Card image cap"
                    />
                    <h4 class="card-title"></h4>
                    <Link className="btn btn-primary" to={"/view-bus"}>
                      Time Tables
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mx-auto">
                <div style={{ height: 190 }} class="card text-center shadow-lg">
                  <div class="card-block">
                    <img
                      style={{ height: 130, width: 130 }}
                      class="card-img-top"
                      src="https://cdn-icons-png.flaticon.com/512/4114/4114560.png"
                      alt="Card image cap"
                    />
                    <h4 class="card-title"></h4>
                    <Link className="btn btn-primary" to={"/view-package"}>
                      Package
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mx-auto ">
                <div style={{ height: 190 }} class="card text-center shadow-lg">
                  <div class="card-block">
                    <img
                      style={{ height: 130, width: 130 }}
                      class="card-img-top"
                      src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
                      alt="Card image cap"
                    />
                    <h4 class="card-title"></h4>
                    <Link className="btn btn-primary" to={"/view-user-details"}>
                      User Management
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
