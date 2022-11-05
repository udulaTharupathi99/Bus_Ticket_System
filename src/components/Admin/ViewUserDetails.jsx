import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function ViewBus() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const purchasedRef = collection(db, "Purchased_packages");

  useEffect(() => {
    const getDetails = async () => {
      const data = await getDocs(purchasedRef);
      console.log(data);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDetails();
  }, []);

  console.log("bus", list);

  const deleteItem = async (id) => {
    alert(id);
    const data = doc(db, "Purchased_packages", id);
    await deleteDoc(data);
    setList(list.filter((b) => b.id !== id));
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
