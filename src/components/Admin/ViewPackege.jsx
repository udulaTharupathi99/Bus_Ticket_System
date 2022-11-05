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
    <div >
       <div >
        <div className="p-3">
      <div
        className=" boxnotice card text-center  p-3"
       
      >
        <h1>Packages</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row ">
              <div className="shadow-lg card mx-auto w-100">
              <div className=" container d-flex flex-row">

              <Link to="/add-package" className="btn btn-primary mt-3 p-2">
                  Add Package
                </Link>
                    
                    
    </div>
                <table class="table table-striped mt-3">
                  <thead className="table-primary">
                    <tr>
                       <th scope="col"> Name</th>
                        <th scope="col">Type </th>
                        <th scope="col">Price</th>
                        <th scope="col"> Valid </th>
                        <th scope="col">Details No</th>
                       
                        <th scope="col">Action</th>
                      
                    </tr>
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
