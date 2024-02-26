import React,{useState,useEffect} from "react";
import Layout from "../../../Components/Layout1/Layout";
import photo from '../../../img/pp.png';
import axios from "axios";
import { Select } from "antd";
import { useNavigate,useParams,Link } from "react-router-dom";
// import { useId } from "../../../Context/FilterContext";
const { Option } = Select;

function Dept_courses() {
  const params = useParams();
  const [Id,setId]=useState(params.departmentId);
  const [count, setcount] = useState(0);
  const [faculty, setfaculty] = useState([]);
  // const [photo, setPhoto] = useState("");
 
  const sendDataToServer = async(value) => {
    try {
     const data  = await axios.post( "/dept-id",{value});
      console.log(data)
    } catch (error) {
     console.log(error)
    }
   };


   const getAllFaculty = async () => {
     try {
      const Id1=params.departmentId
      setId(Id1)
      console.log(Id+"--Id")
      sendDataToServer(Id)
      //  const  {data}  = await axios.get(`{/faculty/get-specificfaculty/${params.departmentId}}`);
       const  {data}  = await axios.get("/faculty/get-specificfaculty");
      //  const  {data}  = await axios.get(`/faculty/get-faculty`);
         setfaculty(data.faculty);
         setcount(data.countTotal)
     } catch (error) {
       console.log(error);
     }
   };


   useEffect(() => {
    if (params.departmentId) {
      getAllFaculty();
    }
  },[params.departmentId]);
  return (
    <Layout>
      <div class="container">
        <h1 className="h1">Bachelor’s in Architecture</h1>

        <div class="profiles">

        <div class="profile-card">
        <div class="profile-image">
            <img  src={`/faculty/faculty-photo/${faculty[0]?._id}`} alt="error" /> 
            </div>
            <div class="profile-info">
            <h3>{faculty[0]?.name}</h3>
                <p>{faculty[0]?.AR}</p>
            </div>
          </div>

          <div class="profile-card">
          <div class="profile-image">
            <img  src={`/faculty/faculty-photo/${faculty[0]?._id}`} alt="error" /> 
            </div>
            <div class="profile-info">
            <h3>{faculty[1]?.name}</h3>
                <p>{faculty[1]?.AR}</p>
            </div>
          </div>
          <div class="cta-section">
            <div class="cta-content">
              <h2>Designing with people</h2>
              <button>Learn more </button>
            </div>
          </div>
         
          {faculty?.map((f) => (
          <div class="profile-card">

          <Link
                key={f._id}
                to={`/dashboard/admin/course/project/${f.slug}`}
                className="product-link"
              >

            <div class="profile-image">
            <img  src={`/faculty/faculty-photo/${f?._id}`} alt="error" /> 
            </div>
            </Link>
            <div class="profile-info">
            <h3>{f?.name}</h3>
                <p>{f?.AR}</p>
            </div>
           
          </div>
          ))}
      
          <div class="profile-card">
          <div class="profile-image">
              <img
                src={photo}
                alt="Pradhyumn"
              />
            </div>
            <div class="profile-info">
              <h3>Pradhyumn</h3>
            </div>
          </div>
    
          </div>
        </div>
    </Layout>
  );
}

export default Dept_courses;
