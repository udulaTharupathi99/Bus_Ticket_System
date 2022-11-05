import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../Admin/Admin.css"
function ViewBus() {
  const navigate = useNavigate();
  const [bus, setBus] = useState([]);
  const busRef = collection(db, "TimeTable");

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
    const data = doc(db, "TimeTable", id);
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

              <Link to="/add-bus" className="btn btn-primary mt-3 p-2">
                  Add Time Table
                </Link>


                 
                    
           {/* <input type="text" placeholder="Search By Notice" className="form-control
            mt-3 admin-srchbr1"onChange={(e) => {setSearch(e.target.value); }} />

            <input type="date" placeholder="Search By Notice" className="form-control mt-3 admin-srchbr-date "
          
              onChange={(e) => {setSearch(e.target.value); }} />
              */}
             {/* <button type="button" className="btn btn-success mt-3 admin-cad" onClick={() =>print({
                            printable: notices, header: 'Announcement Details',
                            properties:
                            [
                            {field: 'faculty', displayName:'Faculty'},
                            {field: 'date', displayName:'Date'},
                            {field: 'topic', displayName:'Topic'},
                            {field: 'notice', displayName:'Notice'},
                           
                        ],
                            type:'json'
                            })}> 
                            print Details
                            &nbsp;
                            <i class="fa fa-print" aria-hidden="true"></i> </button>
                         */}
                    
                    
    </div>
                <table class="table table-striped mt-3">
                  <thead className="table-primary">
                    <tr>
                       <th scope="col">Route Number</th>
                        <th scope="col">Start </th>
                        <th scope="col">End</th>
                        <th scope="col"> Start time </th>
                        <th scope="col">End Time</th>
                        <th scope="col">Bus Number </th>
                        <th scope="col">Action</th>
                      
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
                    {/* {notices?.map((note) => (
                      <tr key={note.id}>
                        <td>{note.faculty}</td>
                        <td>{note.date}</td>
                        <td>{note.topic}</td>
                        <td>{note.notice}</td>
                        <td>
                          <Link
                            className="btn btn-warning"
                            to={`/AdminHome/NoticeTable/NoticeForm/${note._id}`}
                          >
                            Update &nbsp;
                            <i class="fa fa-cog" aria-hidden="true"></i>
                          </Link>
                        </td>
                        
                        <td>
                          <button
                            type="button"
                            // onClick={() => deleteNotice(note._id)}
                            class="btn btn-danger"
                          > Delete &nbsp;
                            <i class="fa fa-trash" aria-hidden="true"></i> 
                            
                          </button>
                        </td> 
                      </tr>
                    ))} */}
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
  );
}

export default ViewBus;
