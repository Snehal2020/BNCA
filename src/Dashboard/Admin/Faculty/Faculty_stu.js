import React,{useState,useEffect} from "react";
import Layout from "./../../../Components/Layout1/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
const { Option } = Select;

const Createproduct = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [selectedcourse, setselectedCourse] = useState();
  const [department, setdepartment] = useState([]);
  const [selecteddepartment, setselecteddepartment] = useState("");
  const [name, setName] = useState("");
  const [ta, setta] = useState("");
  const [AR, setAR] = useState("");
  const [project_name, setProjectname] = useState("");
  const [project_details, setProjectdetails] = useState("");
  const [photo, setPhoto] = useState("");
  const [project_images, setProject_images] = useState("");

  const sendDataToServer = async(value) => {
   try {
    const data  = await axios.post( "/rec",{value});
     console.log(data)
   } catch (error) {
    console.log(error)
   }
  };

  const getAllCourses = async () => {
    try {
      const { data } = await axios.get("/course/get-course");
      if (data?.success) {
        setCourse(data?.course);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting course");
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
 

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      
      const facultyData = new FormData();
      facultyData.append("name", name);
      facultyData.append("ta", ta);
      facultyData.append("AR", AR);
      facultyData.append("project_name", project_name);
      facultyData.append("project_details", project_details);
      facultyData.append("photo", photo);
      facultyData.append("project_images", project_images);
      facultyData.append("course", selectedcourse);
      facultyData.append("department", selecteddepartment);
      console.log(selectedcourse+" ... "+selecteddepartment+" ... "+photo+" ... "+project_images+" ... "+name+" ... ")

      console.log(photo,project_images)
      const { data } =await axios.post(
        "/faculty/add-faculty",
         facultyData
      );
      
     
      if (!data?.success) {
        console.log(data)
      } else {
        navigate("/p_list");
        console.log("Added....")
        
      }
    } catch (error) {
      console.log(error);
      
    }
  };
  const handlechange=async(value)=>{
    await setselecteddepartment(value);
    sendDataToServer(value);
    getAllCourses();
  }
  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <h1>Add Faculty</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a department"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value)=>{handlechange(value)}}
              >
                {department?.map((c) => (
                  
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <Select
                bordered={false}
                placeholder="Select a course"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                    setselectedCourse(value);
                }}
              >
                {course?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={ta}
                  placeholder="write teaching assistant name"
                  className="form-control"
                  onChange={(e) => setta(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={AR}
                  placeholder="write AR Number"
                  className="form-control"
                  onChange={(e) => setAR(e.target.value)}
                />
              </div>


              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
             
              <div className="mb-3">
                <input
                  type="text"
                  value={project_name}
                  placeholder="Enter Project name"
                  className="form-control"
                  onChange={(e) => setProjectname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={project_details}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setProjectdetails(e.target.value)}
                />
              </div>
    
              
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {project_images ? project_images.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setProject_images(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {project_images && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(project_images)}
                      alt="project_img"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div> 

              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ADD FACULTY
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Createproduct;
