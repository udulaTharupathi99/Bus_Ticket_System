import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function ViewBus() {
  const navigate = useNavigate();
  const [bus, setBus] = useState([]);
  const busRef = collection(db, "bus");

  useEffect(() => {
    console.log("hi");

    const getBus = async () => {
      const data = await getDocs(busRef);
      console.log(data);
      setBus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBus();
  }, []);

  console.log("bus", bus);

  const deleteBus = (id) => {
    alert(id);
    //Swal.fire(" succesfully deleted");
  };

  return (
    <div className="container">
      <h1>list</h1>
      <Link to="/add-bus" className="btn btn-primary mb-2">
        Add
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th> no</th>
          <th> start </th>
          <th>end</th>
          <th> time </th>
          <th> bus no </th>
          <th> action</th>
        </thead>
        <tbody>
          {bus.map((b) => (
            <tr key={b.id}>
              <td> {b.no} </td>
              <td> {b.start} </td>
              <td>{b.end}</td>
              <td>{b.time}</td>
              <td>{b.busNo}</td>

              <td>
                <Link className="btn btn-info" to={`/add-bus/${b.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBus(b.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBus;