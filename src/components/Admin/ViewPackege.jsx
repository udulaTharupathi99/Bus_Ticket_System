import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

function ViewPackege() {
  const navigate = useNavigate();
  const [packageList, setpackageList] = useState([]);
  const packageRef = collection(db, "Package");

  useEffect(() => {
    const getPackage = async () => {
      const data = await getDocs(packageRef);
      console.log(data);
      setpackageList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPackage();
  }, []);

  console.log("Package", packageList);

  const deletePackage = async (id) => {
    alert(id);
    const data = doc(db, "Package", id);
    await deleteDoc(data);
    setpackageList(packageList.filter((b) => b.id !== id));
    //Swal.fire(" succesfully deleted");
  };

  return (
    <div className="container">
      <h1>list</h1>
      <Link to="/add-package" className="btn btn-primary mb-2">
        Add
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th> name</th>
          <th> type </th>
          <th>price</th>
          <th> valid </th>
          <th> details no </th>
          <th> action</th>
        </thead>
        <tbody>
          {packageList.map((b) => (
            <tr key={b.id}>
              <td> {b.package_name} </td>
              <td> {b.package_type} </td>
              <td>{b.price}</td>
              <td>{b.valid}</td>
              <td>{b.details}</td>
              <td>
                <Link className="btn btn-info" to={`/add-package/${b.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePackage(b.id)}
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

export default ViewPackege;
