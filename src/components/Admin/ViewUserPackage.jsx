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
    <div >

<div className="">
        <div className="p-3">
      <div
        className=" boxnotice card text-center p-3"
       
      >
        <h1>View User Purchases </h1>

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
                        <th scope="col">Type </th>
                        <th scope="col">Purchase</th>
                       
                         <th scope="col">Expired</th>
                      
                    </tr>
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

export default ViewUserPackage;
