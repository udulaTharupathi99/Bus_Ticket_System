import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Swal from "sweetalert2";

function AddPackege() {
  const [package_name, setPackage_name] = useState("");
  const [package_type, setPackage_type] = useState("");
  const [price, setPrice] = useState();
  const [valid, setValid] = useState();
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const packageRef = collection(db, "Package");

  useEffect(() => {
    if (id) {
      const getpackage = async () => {
        const data = await getDoc(doc(db, "Package", id));
        console.log("d", data);
        setPackage_name(data.data().package_name);
        setPackage_type(data.data().package_type);
        setPrice(data.data().price);
        setValid(data.data().valid);
        setDetails(data.data().details);
      };
      getpackage();
    }
  }, []);

  const title = () => {
    if (id) {
      return <h1>Update Package</h1>;
    } else {
      return <h1>Add Package </h1>;
    }
  };

  const save = async (e) => {
    e.preventDefault();

    const submitData = { package_name, package_type, price, valid, details };

    if (id) {
      const data = doc(db, "Package", id);
      await updateDoc(data, submitData);
      Swal.fire(" Succesfull Update");
      navigate("/view-package");
    } else {
      await addDoc(packageRef, submitData);
      Swal.fire(" Succesfull");
      navigate("/view-package");
    }
  };

  return (
    <div className="">
      <div>
        <div className="row">
          <div
            class="card shadow-lg text-bg-white adminNotice-table mb-3 mt-5 text-center"
            style={{ maxWidth: 900, marginLeft: 300, borderRadius: 30 }}
          >
            <div class="card-body">
              <h2 class="card-title mt-1">{title()}</h2>
              <form>
                <div>
                  {/* package name */}
                  <div className="row w-50  mx-auto mt-3">
                    <strong
                      style={{ marginLeft: -9 }}
                      className="col-sm-3  col-form-label"
                    >
                      Package
                    </strong>
                    <input
                      name="topic"
                      style={{ marginLeft: 9 }}
                      className="form-control w-75"
                      type="text"
                      minLength="2"
                      placeholder="Package Name"
                      value={package_name}
                      onChange={(e) => setPackage_name(e.target.value)}
                      required
                    />
                  </div>

                  {/* type */}
                  <div className="row w-50  mx-auto mt-3">
                    <strong
                      style={{ marginLeft: -9 }}
                      className="col-sm-3  col-form-label"
                    >
                      Type
                    </strong>
                    <input
                      name="topic"
                      style={{ marginLeft: 9 }}
                      className="form-control w-75"
                      type="text"
                      minLength="2"
                      placeholder="Package Type"
                      value={package_type}
                      onChange={(e) => setPackage_type(e.target.value)}
                    />
                  </div>

                  {/* price */}
                  <div className="row w-50  mx-auto mt-3">
                    <strong
                      style={{ marginLeft: -9 }}
                      className="col-sm-3  col-form-label"
                    >
                      price
                    </strong>
                    <input
                      name="topic"
                      style={{ marginLeft: 9 }}
                      className="form-control w-75"
                      type="number"
                      minLength="2"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  {/* time */}
                  <div className="row w-50  mx-auto mt-3">
                    <strong
                      style={{ marginLeft: -9 }}
                      className="col-sm-3  col-form-label"
                    >
                      Valid
                    </strong>
                    <input
                      name="topic"
                      style={{ marginLeft: 9 }}
                      className="form-control w-75"
                      type="number"
                      minLength="2"
                      placeholder="Count of valid days"
                      value={valid}
                      onChange={(e) => setValid(e.target.value)}
                      required
                    />
                  </div>
                  {/* details */}
                  <div className="row w-50  mx-auto mt-3">
                    <strong
                      style={{ marginLeft: -9 }}
                      className="col-sm-3  col-form-label"
                    >
                      Details
                    </strong>
                    <textarea
                      name="topic"
                      style={{ marginLeft: 9 }}
                      className="form-control w-75"
                      type="text"
                      minLength="2"
                      placeholder="Details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      required
                    />
                  </div>

                  <div
                    className="row w-50 mx-auto mt-3 mb-4 "
                    style={{ borderRadius: 30 }}
                  >
                    <button
                      className="btn btn-primary mb-2"
                      onClick={(e) => save(e)}
                    >
                      Submit
                    </button>
                    <Link to="/view-bus" className="btn btn-danger">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* *****************************
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}

            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> name :</label>
                  <input
                    type="text"
                    placeholder="Package Name"
                    className="form-control"
                    value={package_name}
                    onChange={(e) => setPackage_name(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> type :</label>
                  <input
                    type="text"
                    placeholder="Enter "
                    className="form-control"
                    value={package_type}
                    onChange={(e) => setPackage_type(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> price :</label>
                  <input
                    type="text"
                    placeholder="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> time :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={valid}
                    onChange={(e) => setValid(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> details :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" onClick={(e) => save(e)}>
                  Submit
                </button>
                <Link to="/view-bus" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AddPackege;
