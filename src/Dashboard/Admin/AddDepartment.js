import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout1/Layout";
import Sidebar from "./Sidebar";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "antd";
import photo from "../../img/pp.png";
const AddDepartment = () => {
  const [department, setdepartment] = useState([]);
  const [selecteddepartment, setselecteddepartment] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const data = await axios.get("/department/test-cors")
      const { data } = await axios.post("/department/add_department", {
        name,
      });
      if (data?.success) {
        getAllDepartment();
      } else {
        console.log("unable to fetch data");
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

  const getAllDepartment = async () => {
    try {
      const { data } = await axios.get("/department/get_department");
      if (data.success) {
        setdepartment(data.department);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllDepartment();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/department/update-department/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllDepartment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/department/delete-department/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllDepartment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create department"}>
    {/* m-3 p-3 */}
      <div className="container-fluid " style={{marginTop:'100px', marginBottom:'40px'}}>
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <h1>Manage Department</h1>
            <div className="p-3 w-50">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter department"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div class="container1">
              <h1 className="hh1">All Departments</h1>

              <div class="profiles1" style={{marginTop:"70px"}}>
                {department?.map((c) => (
                  <>
                    <div class="profile-card1">
                      <div class="profile-image1">
                       <a href={`/dashboard/admin/department/courses/${c._id}`} onClick={() => setselecteddepartment(c._id)} >{c.name}</a>
                       {/* <a href="/dashboard/admin/department/courses" >{c.name}</a> */}
                      </div>
                      <div class="profile-info1">
                        <button
                          className="btn btn-primary ms-2"
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => {
                            handleDelete(c._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                ))}

              </div>
            </div>

            {/* <div className="w-75">
              <table className="table">
                <tbody>
                  {department?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => {
                              setVisible(true);
                              setUpdatedName(c.name);
                              setSelected(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div> */}
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new category"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddDepartment;
