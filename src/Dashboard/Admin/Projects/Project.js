import React,{useState,useEffect} from "react";
import Layout from "../../../Components/Layout1/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
function Project() {
  const params = useParams();
    const [department, setdepartment] = useState();
    const [faculty, setfaculty] = useState({});
   
    const getAllFaculty = async () => {
      try {
        const  {data}  = await axios.get(`/faculty/get-faculty/${params.slug}`);
          setfaculty(data.faculty);
        console.log(faculty._id)
        console.log(faculty)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
    getAllFaculty();
   },[]);



  return (
    <Layout>
      <div>
        <div class="course-container">
          <div class="text-section">
           <div className="static">
           <h2 style={{color:'#6B469C', fontSize:'20px',marginTop:'50px'
}}>AR2024</h2>
            <div className="cont">
            <h1 style={{fontSize:'25px'}}>Designing with people</h1>
            <p>
              <strong>Faculty:</strong> {faculty?.name}
            </p>
            <p>
              <strong>TA:</strong> {faculty?.ta}
            </p>
            </div>
            <h3>MONUMENTS, MEMORY AND RUINS</h3>
            <p className="p1">
              {faculty?.project_details}
            </p>
           </div>
          </div>
          <div class="image-gallery">
            <img src={`/faculty/faculty-project_images/${faculty?._id}`} alt="Event Photo" class="image-large" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Project;
