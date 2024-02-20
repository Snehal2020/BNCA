import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout1/Layout";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Modal } from "antd";
import Sidebar from "./Sidebar";
import Admin_Dashboard from "./Admin_Dashboard";

export const AddDepartment = () => {
  const [department, setDepartment] = useState([
    {
      name:'Architecture'
    },
    {
      name:'Design'
    }
  ]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const { data } = await axios.post("/category/create-category", {
    //     name,
    //   });
    //   if (data?.success) {
    //     toast.success(`${name} is created`);
    //     getAllCategory();
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("somthing went wrong in input form");
    // }
  };

  //get all cat
  const getAllDepartments = async () => {
  //   try {
  //     const { data } = await axios.get("/category/get-category");
  //     if (data.success) {
  //       setDepartment(data.department);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something wwent wrong in getting catgeory");
  //   }
  };

  useEffect(() => {
    getAllDepartments();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    // e.preventDefault();
    // try {
    //   const { data } = await axios.put(
    //     `/category/update-category/${selected._id}`,
    //     { name: updatedName }
    //   );
    //   if (data.success) {
    //     toast.success(`${updatedName} is updated`);
    //     setSelected(null);
    //     setUpdatedName("");
    //     setVisible(false);
    //     getAllCategory();
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   toast.error("Somtihing went wrong");
    // }
  };
  //delete category
  const handleDelete = async (pId) => {
    // try {
    //   const { data } = await axios.delete(`/category/delete-category/${pId}`);
    //   if (data.success) {
    //     toast.success(`category is deleted`);

    //     getAllCategory();
    //   } else {
    //     toast.error(data.message);
    //   }
    // } catch (error) {
    //   toast.error("Somtihing went wrong");
    // }
  };

  return (
   
    <Layout title={"Dashboard - Departments"}>

      




     <div class="body-wrapper">
     <div className="container-fluid m-3 p-3">
        <div className="row">
          {/* <div className="col-md-3">
          <Sidebar></Sidebar>
          </div> */}
          <div className="col-md-9">
            <h1>Departments</h1>
            <div className="p-3 w-50">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter department name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {department?.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(c._id);
                            }}
                          >
                           Select
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default AddDepartment;
