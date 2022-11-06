import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ViewPackege() {
  const navigate = useNavigate();
  const [packageList, setpackageList] = useState([]);
  const packageRef = collection(db, "Package");
  const [search, setSearch] = useState("");

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = doc(db, "Package", id);
        deleteDoc(data);
        setpackageList(packageList.filter((b) => b.id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div>
        <div className="p-3">
          <div className=" boxnotice card text-center  p-3">
            <h1>Packages</h1>

            <input
              type="text"
              placeholder="Search"
              className="form-control
                              mt-3 admin-srchbr1"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <div>
              <div className="container p-1 mt-4 mb-4">
                <div className="row ">
                  <div className="shadow-lg card mx-auto w-100">
                    <div className=" container d-flex flex-row">
                      <Link
                        to="/add-package"
                        className="btn btn-primary mt-3 p-2"
                      >
                        Add Package
                      </Link>
                    </div>
                    <table class="table table-striped mt-3">
                      <thead className="table-primary">
                        <tr>
                          <th scope="col">Package Name</th>
                          <th scope="col">Package Type </th>
                          <th scope="col">Price</th>
                          <th scope="col"> Valid Days </th>
                          <th scope="col"> Package Details </th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {packageList
                          .filter((value) => {
                            if (search === "") {
                              return value;
                            } else if (
                              value.package_name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return value;
                            }
                            return 0;
                          })
                          .map((b) => (
                            <tr key={b.id}>
                              <td> {b.package_name} </td>
                              <td> {b.package_type} </td>
                              <td>{b.price}</td>
                              <td>{b.valid}</td>
                              <td>{b.details}</td>
                              <td>
                                <Link
                                  className="btn btn-warning"
                                  to={`/add-package/${b.id}`}
                                >
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
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPackege;
