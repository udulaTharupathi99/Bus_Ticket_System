import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../Admin/Admin.css";
import Swal from "sweetalert2";
function ViewBus() {
  const navigate = useNavigate();
  const [bus, setBus] = useState([]);
  const busRef = collection(db, "TimeTable");
  const [search, setSearch] = useState("");

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
        const data = doc(db, "TimeTable", id);
        deleteDoc(data);
        setBus(bus.filter((b) => b.id !== id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    // const data = doc(db, "TimeTable", id);
    // await deleteDoc(data);
    // setBus(bus.filter((b) => b.id !== id));
    //Swal.fire(" succesfully deleted");
  };

  return (
    <div className="">
      <br></br>

      <div className="p-3">
        <div className=" boxnotice card text-center p-3">
          <h1>Bus Time Table</h1>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="form-control
                              mt-3 admin-srchbr1"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <div>
            <div className="container p-1 mt-4 mb-4">
              <div className="row ">
                <div className="shadow-lg card mx-auto w-100">
                  <div className=" container d-flex flex-row">
                    <Link to="/add-bus" className="btn btn-primary mt-3 p-2">
                      Add Time Table
                    </Link>
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
                      {bus
                        .filter((value) => {
                          if (search === "") {
                            return value;
                          } else if (
                            value.no
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return value;
                          }
                          return 0;
                        })

                        .map((b) => (
                          <tr key={b.id}>
                            <td> {b.no} </td>
                            <td> {b.start} </td>
                            <td>{b.end}</td>
                            <td> {b.startTime} </td>
                            <td>{b.endTime}</td>
                            <td>{b.busNo}</td>

                            <td>
                              <Link
                                className="btn btn-warning"
                                to={`/add-bus/${b.id}`}
                              >
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
