import React,{useState,useEffect} from 'react'
import Layout from '../../Components/Layout1/Layout'
import Sidebar from './Sidebar';
import { toast } from 'react-hot-toast';
import { Select } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

function ManageCourse() {
   
  const navigate = useNavigate();
  const [course, setCourse] = useState();
  const [name, setName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState([]);
  //get all category
   const getAllDepartment = async () => {
    try {
      const { data } = await axios.get("/department/get_department");
      if (data.success) {
        setDepartment(data.department);
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
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const courseData = new FormData();
      courseData.append("name", name);
      courseData.append("description", description);
      courseData.append("department", selectedDepartment);
      console.log(courseData)
      const { data } = await axios.post(
        "/course/add-course",
        courseData
      );
      if (data?.success) {
        // toast.error(data?.message);
        console.log(data)
      } else {
        toast.success("Course Added Successfully");
        navigate("/dashboard/admin/course");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };



  return (
   <Layout>
        <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <h1>Add course</h1>
            <div className="m-1 w-75">
              <Select
                // bordered={false}
                placeholder="Select a department"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
          setSelectedDepartment(value); // Set the selected department's id
        }}
              >
                {department?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Course Name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary"  onClick={handleAdd}>
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Layout>
      
  )
}

export default ManageCourse
