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
    <div className="">

<div>
      <div className="row">
        <div
          class="card shadow-lg text-bg-white adminNotice-table mb-3 mt-5 text-center"
          style={{ maxWidth: 900, marginLeft: 300, borderRadius: 30 }}
        >
          <div class="card-body">
            <h2 class="card-title mt-1">{title()}</h2>
            <form >
              <div>
             
                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    Route No
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="text"
                    minLength="2"
                    value={no}
                    onChange={(e) => setNo(e.target.value)}
                    required
                  />
                </div>

                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    Start
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="text"
                    minLength="2"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
                {/* end */}
                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    End
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="text"
                    minLength="2"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    required
                  />
                </div>
                {/* start time */}
                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    Start Time
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="time"
                    minLength="2"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </div>
                {/* endTime */}
                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    End time
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="time"
                    minLength="2"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </div>

                <div className="row w-50  mx-auto mt-3">
                <strong  style={{ marginLeft: -9 }} className="col-sm-3  col-form-label" >
                    Bus No
                  </strong>
                  <input
                    name="topic"
                    style={{ marginLeft: 9 }}
                    className="form-control w-75"
                    placeholder="Add Topic..."
                    type="text"
                    minLength="2"
                    value={busNo}
                    onChange={(e) => setBusNo(e.target.value)}
                    required
                  />
                </div>

               

               

                <div
                  className="row w-50 mx-auto mt-3 mb-4 "
                  style={{ borderRadius: 30 }}
                >
                  
                <button className="btn btn-primary mb-2" onClick={(e) => save(e)}>
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
    </div>
  );
}

export default AddBus;
