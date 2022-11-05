import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function ViewUserDetails() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const userRef = collection(db, "RegisteredUser");

  useEffect(() => {
    const getDetails = async () => {
      const data = await getDocs(userRef);
      console.log("u", data);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDetails();
  }, []);

  console.log("bus", list);

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
              <td> {b.phone_number} </td>

              <td>
                <Link
                  className="btn btn-info"
                  to={`/view-user-details/${b.id}`}
                >
                  view
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUserDetails;
