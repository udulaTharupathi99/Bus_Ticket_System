import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function ViewBus() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const userRef = collection(db, "RegisteredUser");

  useEffect(() => {
    const getDetails = async () => {
      const data = await getDocs(userRef);
      console.log(data);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // const getDetails = async () => {
    //   const q = query(
    //     collection(db, "RegisteredUser"),
    //     where("passenger_Id", "==", myData.uid)
    //   );
    //   const data = await getDocs(q);
    //   console.log(data);
    //   setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    getDetails();

    // const getTasks = async () => {
    //   const q = query(
    //     collection(db, "purchased_packages"),
    //     where("passenger_Id", "==", myData.uid)
    //   );
    //   const data = await getDocs(q);
    //   setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };
    // getTasks();
  }, []);

  console.log("bus", list);

  // const deleteItem = async (id) => {
  //   alert(id);
  //   const data = doc(db, "Purchased_packages", id);
  //   await deleteDoc(data);
  //   setList(list.filter((b) => b.id !== id));
  //   //Swal.fire(" succesfully deleted");
  // };

  return (
    <div className="container">
      <h1>list</h1>
      {/* <Link to="/add-bus" className="btn btn-primary mb-2">
        Add
      </Link> */}

      <table className="table table-bordered table-striped">
        <thead>
          <th> name</th>
          <th> mobile </th>
          <th>view</th>
        </thead>
        <tbody>
          {list.map((b) => (
            <tr key={b.id}>
              <td> {b.name} </td>
              <td> {b.phone - number} </td>

              <td>
                <Link className="btn btn-info" to={`/add-bus/${b.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(b.id)}
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
