import React,{useState} from "react";
import Layout from "../Components/Layout1/Layout";
import photo from '../img/pp.png';
function Portfolio_list() {
  // const [user, setUser] = useState([]);

  // //getall products
  // const getAllusers = async () => {
  //   try {
  //     const { data } = await axios.get("/get-user");
  //     setUser(data.products);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Someething Went Wrong");
  //   }
  // };

  // //lifecycle method
  // useEffect(() => {
  //   getAllusers();
  // }, []);
  return (
    <Layout>
      <div class="container">
        <h1>Bachelor’s in Architecture</h1>

        <div class="profiles">
          <div class="profile-card">
            <div class="profile-image">
              <img
                src={photo}
                alt="Pradhyumn"
              />
            </div>
            <div class="profile-info">
              <h3>Pradhyumn</h3>
              <p>AR2024</p>
            </div>
          </div>
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
          <div class="cta-section">
            <div class="cta-content">
              <h2>Designing with people</h2>
              <button>Learn more </button>
            </div>
          </div>
         
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

export default Portfolio_list;
