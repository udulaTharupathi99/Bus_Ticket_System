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
    <div >


<div className="">
        <div className="p-3">
      <div
        className=" boxnotice card text-center p-3"
       
      >
        <h1>View Users</h1>

        <div>
          <div className="container p-1 mt-4 mb-4">
            <div className="row ">
              <div className="shadow-lg card mx-auto w-100">
              <div className=" container d-flex flex-row">                  
                    
    </div>
                <table class="table table-striped mt-3">
                  <thead className="table-primary">
                    <tr>
                       <th scope="col">Name</th>
                        <th scope="col">Mobile </th>                        
                        <th scope="col">View</th>
                      
                    </tr>
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

export default ViewUserDetails;
