import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

function AddBus() {
  const [no, setNo] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [busNo, setBusNo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const busRef = collection(db, "bus");

  useEffect(() => {
    if (id) {
      //get bus by id
      const getBus = async () => {
        const data = await getDoc(doc(db, "bus", id));
        setNo(data.data().no);
        setStart(data.data().start);
        setEnd(data.data().end);
        setStartTime(data.data().startTime);
        setEndTime(data.data().endTime);
        setBusNo(data.data().busNo);
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

    const submitData = { no, start, end, startTime, endTime, busNo };

    if (id) {
      const data = doc(db, "bus", id);
      await updateDoc(data, submitData);
      navigate("/view-bus");
    } else {
      await addDoc(busRef, submitData);
      navigate("/view-bus");
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
                  <label className="form-label"> start :</label>
                  <input
                    type="text"
                    placeholder="Enter "
                    className="form-control"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> end :</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="form-control"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
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
