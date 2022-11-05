import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const ViewPassenger = () => {

    const navigate = useNavigate();
  const [bus, setBus] = useState([]);
  const busRef = collection(db, "bus");

  useEffect(() => {
    console.log("hi");

    const getBus = async () => {
      const data = await getDocs(busRef);
      console.log("view", data);
      setBus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBus();
  }, []);

  console.log("bus", bus);

  const deleteBus = async (id) => {
    alert(id);
    const data = doc(db, "bus", id);
    await deleteDoc(data);
    setBus(bus.filter((b) => b.id !== id));
    //Swal.fire(" succesfully deleted");
  };
  return (
    <div className="">
    <div className="p-3">
  <div
    className=" boxnotice card text-center p-3"
   
  >
    <h1>Bus TimeTable</h1>

    <div>
      <div className="container p-1 mt-4 mb-4">
        <div className="row ">
          <div className="shadow-lg card mx-auto w-100">
          <div className=" container d-flex flex-row">
                 
                
</div>
            <table class="table table-dark table-striped mt-3">
              <thead className="table-light">
                <tr>
                   <th scope="col">Route Number</th>
                    <th scope="col">Start </th>
                    <th scope="col">End</th>
                    <th scope="col"> Start time </th>
                    <th scope="col">End Time</th>
                    <th scope="col">Bus Number </th>
                   
                  
                </tr>
              </thead>
              <tbody>

              {bus.map((b) => (
        <tr key={b.id}>
          <td> {b.no} </td>
          <td> {b.start} </td>
          <td>{b.end}</td>
          <td> {b.startTime} </td>
          <td>{b.endTime}</td>
          <td>{b.busNo}</td>

         
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
  )
}

export default ViewPassenger