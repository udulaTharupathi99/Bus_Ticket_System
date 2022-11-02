import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { async } from "@firebase/util";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function AddBus() {
  const [no, setNo] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");
  const [busNo, setBusNo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const busRef = collection(db, "bus");

  useEffect(() => {
    console.log("hi");
    if (id) {
      const getBus = async () => {
        const data = doc(db, "bus", id);
        console.log(data);
        //setBus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getBus();
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

    const submitData = { no, start, end, time, busNo };

    if (id) {
      //await updateDoc(busRef,)
      navigate.push("/view-bus");
    } else {
      await addDoc(busRef, submitData);
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
                  <label className="form-label"> no :</label>
                  <input
                    type="text"
                    placeholder="Enter "
                    className="form-control"
                    value={no}
                    onChange={(e) => setNo(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> start :</label>
                  <input
                    type="text"
                    placeholder="Enter "
                    className="form-control"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> end :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> time :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> busNo :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={busNo}
                    onChange={(e) => setBusNo(e.target.value)}
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

export default AddBus;
