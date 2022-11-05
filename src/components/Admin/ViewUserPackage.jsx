import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function ViewUserPackage() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  //const packageRef = collection(db, "purchased_packages");

  useEffect(() => {
    if (id) {
      const getTasks = async () => {
        const q = query(
          collection(db, "purchased_packages"),
          where("passenger_Id", "==", id)
        );
        const data = await getDocs(q);
        console.log("pp", data);
        setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getTasks();
    }
  }, []);

  console.log("Package", list);
  console.log("id", id);

  return (
    <div className="container">
      <h1>list</h1>

      <table className="table table-bordered table-striped">
        <thead>
          <th> name</th>
          <th> type </th>
          <th>purchased</th>
          <th>expired</th>
        </thead>
        <tbody>
          {list.map((b) => (
            <tr key={b.id}>
              <td> {b.package_name} </td>
              <td> {b.package_type} </td>
              <td> {b.purchased} </td>
              <td> {b.expired} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUserPackage;
