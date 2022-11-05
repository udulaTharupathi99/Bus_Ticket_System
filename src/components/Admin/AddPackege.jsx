import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function AddPackege() {
  const [package_name, setPackage_name] = useState("");
  const [package_type, setPackage_type] = useState("");
  const [price, setPrice] = useState("");
  const [valid, setValid] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const packageRef = collection(db, "Package");

  useEffect(() => {
    if (id) {
      const getpackage = async () => {
        const data = doc(db, "Package", id);
        console.log(data);
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
      return <h1>Update </h1>;
    } else {
      return <h1>Add </h1>;
    }
  };

  const save = async (e) => {
    e.preventDefault();

    const submitData = { package_name, package_type, price, valid, details };

    if (id) {
      const data = doc(db, "Package", id);
      await updateDoc(data, submitData);
      navigate("/view-bus");
    } else {
      await addDoc(packageRef, submitData);
      navigate.push("/view-bus");
    }
  };

  return (
    <div className="container">
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
                    placeholder="Enter "
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
                    placeholder="Enter"
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
      </div>
    </div>
  );
}

export default AddPackege;
